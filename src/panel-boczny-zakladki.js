import React from 'react';
import "./panel-boczny-zakladki.css"

function Zakladka({ Ikonka, tekst }){
    return(
        <div className="panelZakladki">
            <Ikonka />
            <h2>{tekst}</h2>
        </div>
    );
}

export default Zakladka;