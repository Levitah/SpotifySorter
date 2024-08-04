import * as React from "react";
import { useSearchParams } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

const Index = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Request Spotify access:<br />
                <button onClick={RequestAuthorization}><i class="i-spotify"></i> Spotify</button>
            </p>
        </header>
      );
};

function RequestAuthorization() {
    fetch('http://localhost:3001/api/authorizeSpotify')
    .then(response => response.json())
    .then(json => {
        window.location.href = json.message;
    })
    .catch(error => console.error(error));
}
  
export default Index;