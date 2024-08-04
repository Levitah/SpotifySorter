// server/index.js
//Source: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

const express = require("express");
const spotify = require("./external/spotify/api.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server! SpotifyClientId:" + process.env.SpotifyClientId });
});

app.get("/api/getTopTracks", (req, res) => {
    spotify.get_top_tracks().then(function(result) {
        res.json({ message: result });
    });
});

app.get("/api/authorizeSpotify", (req, res) => {
    res.json({ message: spotify.authorize() });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});