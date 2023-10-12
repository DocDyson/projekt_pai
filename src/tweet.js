import React from 'react';
import './tweet.css';
import { Avatar, Button } from "@mui/material"

function Tweet(){
    return(
        <div className="tweet">

        <form>
            <div className="tweet_pole">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <input placeholder="Co słychać?" type="text"/>
            </div>
            <Button className="tweet_przycisk">Opublikuj</Button>
        </form>

        </div>
    );
}

export default Tweet;