import React from 'react'
import Rock from "../../icons/Rock";
import Paper from "../../icons/Paper";
import Scissors from "../../icons/Scissors";

const HandleClick = ({setUserChoice}) => {

    return (
        <div>
            <button onClick={() => setUserChoice('rock')} className="rock">
                <Rock/>
            </button>
            <button onClick={() => setUserChoice("paper")} className="paper">
                <Paper/>
            </button>
            <button onClick={() => setUserChoice("scissors")} className="scissors">
                <Scissors/>
            </button>
        </div>
    )
}

export default HandleClick