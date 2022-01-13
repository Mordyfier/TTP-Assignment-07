import React, { useEffect, useState } from "react";
import Card from "./Card"
import config from '../config'
const API_KEY = config();

function reduce(mode, query) {
    switch(mode) {
        case 'r':
            return "Here is your random GIF:";
        case 't':
            return "Here are the currently trending GIFs:";
        case 's':
            return `Here are some ${query} GIFs:`;
        case 'n':
            return `No ${query} GIFs found :(`;
        default:
            return;
    }
}

export default function Search() {
    const [cards, setCards] = useState("");
    const [title, setTitle] = useState("");
    let trendingButton;
    let randomButton;
    let searchButton;
    let searchButtonText;
    useEffect(()=> {
        trendingButton = document.getElementById('trendingButton');
        trendingButton.addEventListener('click', async () => {
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=40`);
            const data = await response.json();
            setTitle(<h1>{reduce('t')}</h1>);
            setCards(data.data.map(x => <Card key={x.id} gif={x} />));
        })
    }, []);
    useEffect(()=> {
        randomButton = document.getElementById('randomButton');
        randomButton.addEventListener('click', async () => {
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
            const data = await response.json();
            setTitle(<h1>{reduce('r')}</h1>);
            setCards(<Card key={data.data.id} gif={data.data} random={true} />);
        })
    }, []);

    useEffect(() => {
        searchButton = document.getElementById('searchButton');
        searchButtonText = document.getElementById('searchButtonText');

        searchButton.addEventListener('click', async () => {
            if (searchButtonText.value) {
                const query = searchButtonText.value;
                searchButtonText.value = "";
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=40`);
                const data = await response.json();
                if (data.data.length > 0) {
                    setTitle(<h1>{reduce('s', query)}</h1>);
                    setCards(data.data.map(x => <Card key={x.id} gif={x} />));
                    
                } else {
                    setTitle(<h1>{reduce('n', query)}</h1>);
                    setCards("");
                }
            } else {
                setTitle(<h1>Please enter a search term.</h1>)
            }
        })
    }, []);
    return (
        <>
            {title}
            <div className="cards">
                {cards}
            </div>
        </>
    )
}