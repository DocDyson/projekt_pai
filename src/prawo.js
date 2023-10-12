import React from 'react';
import './prawo.css';
import Zakladka from "./panel-boczny-zakladki";
import SettingsIcon from '@mui/icons-material/Settings';

function Prawo(){
    return(
        <div className="prawo">

        { /* zakladka */ }
        <Zakladka Ikonka={SettingsIcon} tekst="Ustawienia" />


        </div>
    );
}

export default Prawo;