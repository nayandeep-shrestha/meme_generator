import memesData from '../memesData.js'
import {useState} from 'react'
export const Form = () => {
    const [meme, setMeme]= useState({
        upperText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImg, setAllMemeImg]= useState(memesData)
    
    const Click = () =>{
        const memeArray = allMemeImg.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }) )
    }
    return (
        <div className="form">
            <input type="text" placeholder="Upper Text" className="form-input" />
            <input type="text" placeholder="Lower Text" className="form-input"/>
            <button className="form-button" onClick={Click}>Get a new meme image </button>
            <img src={meme.randomImg} className="memeImg"/>
        </div  >
    )
}