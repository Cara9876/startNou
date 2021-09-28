import React from 'react'
import {useEffect} from "react";
import {WinsLoses, Wins, Losses, Number} from "../../Styled/WinsLoses";

const Play = ({setSmShow, computerChoice, userChoice, setLose, setWin, lose, win, setUserChoice, setComputerChoice, draw, setDraw}) => {

    useEffect(() => {
        switch (userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setWin(win + 1)
                setUserChoice("")
                setComputerChoice("")
                setSmShow(true)
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setLose(lose + 1)
                setUserChoice("")
                setComputerChoice("")
                setSmShow(true)
                break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                setUserChoice("")
                setComputerChoice("")
                setDraw(draw + 1)
                setSmShow(true)
                break
            default:
                break;
        }
    }, [computerChoice, userChoice, win, lose, draw])
    return (
        <WinsLoses>
            <Wins>
                <Number>{win}</Number>
                Wins
            </Wins>

            <Losses>
                <Number>{lose}</Number>
                Losses
            </Losses>
        </WinsLoses>
    )
}

export default Play