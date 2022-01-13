import React, { useEffect, useState } from "react";
import Card from "./Card"
import config from '../config'
const API_KEY = config();

export default function Search() {
    const [cards, setCards] = useState("");
    let trendingButton;
    let randomButton;
    let searchButton;
    let searchButtonText;
    useEffect(()=> {
        trendingButton = document.getElementById('trendingButton');
        trendingButton.addEventListener('click', async () => {
            const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY);
            const data = await response.json();
            setCards(data.data.map(x => <Card key={x.id} gif={x}/>));
        })
    }, []);
    useEffect(()=> {
        randomButton = document.getElementById('randomButton');
        randomButton.addEventListener('click', async () => {
            const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY);
            const data = await response.json();
            setCards(<Card key={data.data.id} gif={data.data}/>);
        })
    }, []);

    useEffect(() => {
        searchButton = document.getElementById('searchButton');
        searchButtonText = document.getElementById('searchButtonText');

        searchButton.addEventListener('click', async () => {
            const response = await fetch("https://api.giphy.com/v1/gifs/search?q=" + searchButtonText.value + "&api_key=" + API_KEY);
            const data = await response.json();
            setCards(data.data.map(x => <Card key={x.id} gif={x}/>));
        })
    }, []);
    return (
        <div className="cards">
            {cards}
        </div>
    )
}