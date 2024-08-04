const express = require("express");

function authorize() {
    var client_id = process.env.SpotifyClientId;
    var redirect_uri = 'http://localhost:3000/spotifyLogin';

    var app = express();

    var scope = 'playlist-read-private user-top-read user-library-read user-follow-read';

    return 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + client_id + '&scope=' + scope + '&redirect_uri=' + redirect_uri;
}


function get_token() {
    var client_id = process.env.SpotifyClientId;
    var redirect_uri = 'http://localhost:3000/spotifyLogin';

    var app = express();

    app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'ugc-image-upload playlist-read-private';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
        }));
    });
}

module.exports = { get_token, authorize };