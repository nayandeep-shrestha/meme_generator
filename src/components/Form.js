import {useState, useEffect} from 'react'

export const Form = () => {
    const [meme, setMeme]= useState({
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes]= useState([])

    useEffect(() =>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data= await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    })
    
    const handleClick = () =>{
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }) )
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <div className="form">
            <input 
                type="text"
                placeholder="Top Text" 
                className="form-input"
                name="topText"
                value={meme.upperText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Lower Text" 
                className="form-input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange} 
            />
            <button className="form-button" onClick={handleClick}>Get a new meme image </button>
            <div className='meme'>
                <img src={meme.randomImg} className="meme-img"/>
                <h2 className="meme-text top">{meme.upperText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>            
        </div>
    )
}