import React, {useEffect, useState} from 'react';
import './App.css';
import ComputerChoice from "./components/computer-choice";
import HandleClick from "./components/user-choice";
import Play from "./components/play";
import {AppStyle} from "./Styled/AppStyle";
import {InfoStyled} from "./Styled/InfoStyled";
import {VS} from "./Styled/VS";
import {Choices} from "./Styled/Choices";
import GameStat from "./components/game-stat";

export default function App() {
    const [userChoice, setUserChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")
    const [win, setWin] = useState(0)
    const [lose, setLose] = useState(0)
    const [draw, setDraw] = useState(0)
    const [smShow, setSmShow] = useState(false);
    const choices = ['rock', 'paper', 'scissors']
    const test = (value) => {
        setUserChoice(value)
    }
    useEffect(() => {
        console.log(computerChoice)
    }, [computerChoice])
    useEffect(() => {
        console.log(userChoice)
    }, [userChoice])

    return (
        <AppStyle>
            <InfoStyled>
                <h2>Rock. Paper. Scissors</h2>
                <Play computerChoice={computerChoice} userChoice={userChoice} win={win} lose={lose} setWin={setWin}
                      setLose={setLose} setUserChoice={setUserChoice} setComputerChoice={setComputerChoice} draw={draw}
                      setDraw={setDraw} smShow={smShow} setSmShow={setSmShow}/>
            </InfoStyled>
            <Choices>
                <div>You</div>
                <div/>
                <div>Computer</div>
                <HandleClick setUserChoice={setUserChoice} choices={choices} test={test}/>
                <VS>vs</VS>
                <ComputerChoice choices={choices} setUserChoice={setUserChoice} setComputerChoice={setComputerChoice}/>
            </Choices>
            <GameStat computerChoice={computerChoice} userChoice={userChoice} win={win} lose={lose} setWin={setWin}
                      setLose={setLose} setUserChoice={setUserChoice} setComputerChoice={setComputerChoice} draw={draw}
                      setDraw={setDraw} setSmShow={setSmShow} smShow={smShow}/>
            {/* the popup to show win/loss/draw */}
            {/* <div className="game-state"></div> */}
        </AppStyle>
    );
}