import React from 'react'
import {useEffect} from "react";

const Play = props => {

useEffect(() =>
    {
        switch (props.userChoice + props.computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                props.setWin(props.win + 1)
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                props.setLose(props.lose +1)
                break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                break
            default:
                break;
        }
}, [props, props.computerChoice, props.userChoice])
    return(
        <div className="wins-losses">
            <div className="wins">
                <span className="number" >{props.win}</span>
                <span className="text">Wins</span>
            </div>

            <div className="losses">
                <span className="number">{props.lose}</span>
                <span className="text">Losses</span>
            </div>
        </div>
    )
}

export default Play