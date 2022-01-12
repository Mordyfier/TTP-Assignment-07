import React, { useEffect, useState } from "react";
import Card from "./Card"
import config from '../config'
const API_KEY = config();


export default function Search() {
    const [cards, setCards] = useState("");
    let trendingButton;
    let randomButton;
    useEffect(()=> {
        trendingButton = document.getElementById('trendingButton');
        trendingButton.addEventListener('click', () => {
            fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY)
                .then(res => res.json())
                .then(data => {
                    setCards(data.data.map(x => <Card key={x.id} gif={x}/>))
                })
                .catch(e => console.log('Connection error', e));
        })
    }, []);
    useEffect(()=> {
        randomButton = document.getElementById('randomButton');
        randomButton.addEventListener('click', () => {
            fetch("https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY)
                .then(res => res.json())
                .then(data => {
                    setCards(<Card key={data.data.id} gif={data.data}/>)
                })
                .catch(e => console.log('Connection error', e));
        })
    }, []);
    return (
        <div className="cards">
            {cards}
        </div>
    )
}