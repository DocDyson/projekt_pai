import React from 'react';
import "./srodek.css"
import Tweet from "./tweet"

function Srodek(){
    return(
        <div className="srodek">

        {/* naglowek */}
        <div className="srodek-naglowek">
            <h2>Sekcja wpisów</h2>
        </div>
        {/* miejsce do tweetowania */}

        <Tweet/>

        {/* wpisy */}

        </div>
    );
}

export default Srodek;