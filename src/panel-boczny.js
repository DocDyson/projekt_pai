import React from 'react';
import './panel-boczny.css';
import Zakladka from './panel-boczny-zakladki';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import {useNavigate, Route, Routes} from 'react-router-dom';
import Rejestracja from './components/formularz-rejestracji';

function Panel(){
    const navigate = useNavigate();

    const navigateToRegistration = () => {
        // 👇️ navigate to /registration
        navigate('/registration');
    };

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    return(
        <div className="panel">

        { /* tu jakieś logo można wstawić */ }

        { /* zakladka w panelu 1 */ }
        <Zakladka Ikonka={HomeIcon} tekst="Główna" />

        { /* zakladka w panelu 2 */ }
        <Zakladka Ikonka={MailOutlineIcon} tekst="Wiadomości" />

        { /* zakladka w panelu 3 */ }
        <Zakladka Ikonka={PersonIcon} tekst="Profil" />

        { /* Przycisk - dodaj wpis */ }
        <Button variant="outlined" className="przyciskWpis" fullWidth>Testowy przycisk</Button>

        <div>
            <Button variant="outlined" onClick={navigateToRegistration} className="przyciskWpis">Rejestracja</Button>

            <Routes>
                <Route path="/registration" element={<Rejestracja />} />
            </Routes>
        </div>

        </div>
    );
}

export default Panel;


