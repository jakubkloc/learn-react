import React from "react";
import memesData from "./memesData";

export default function Meme() {
  React.useEffect(
    function(){
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        setAllMeme(data);
        console.log(data  );
      })
    },[]
  );



  function handleChange(event) {
    const {value, name} = event.target;
    
    setMeme(prevState=>({...prevState, [name]:value }))
  }


  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  function getMemeImage() {
    const randomNumber = Math.round(Math.random() * 100);

    const url = allMeme.data.memes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="meme">
      <div className="meme-form">
        <div className="meme-input-container">
          <input
            className="meme-form-input"
            type="text"
            placeholder={meme.topText}
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />
          <input
            className="meme-form-input"
            type="text"
            placeholder={meme.bottomText}
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
        </div>
        <button onClick={getMemeImage} className="meme-form-btn">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </div>
  );
}
