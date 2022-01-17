import React from "react";

export default function Intro() {
    return (
        <div className="intro">
            <h1>Welcome to GIPHY Lookup!</h1>
            <p>This React App utilizes the GIPHY API to procure GIFs for your entertainment 😊</p>
            <h2>Try it out!</h2>
            <p>Type your search term into the search box (GIFs will appear automatically when you stop typing!)</p>
            <p> - or - </p>
            <p>Select one of the buttons to receive a batch of currently trending GIFs or a single random GIF.</p>
        </div>

    )
}