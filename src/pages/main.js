import React from "react";
import '../styles.css';

function Main() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + 'logo.svg'} className="App-logo" alt="logo" />
                <p>
                    Site Under Construction
                </p>
                <a
                    className="App-link"
                    href="https://github.com/PatCerianDon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link
                </a>
            </header>
        </div>
    );
}

export default Main;