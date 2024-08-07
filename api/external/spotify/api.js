var auth = require("./auth.js");

function authorize() {
    return auth.authorize();
}

async function get_top_tracks() {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
    async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
    }

    async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
    }

    const topTracks = await getTopTracks();
    console.log(
    topTracks?.map(
        ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
    );
}

module.exports = { get_top_tracks, authorize };