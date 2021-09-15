import React, {useState} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import ComputerChoice from "./components/computer-choice";
import HandleClick from "./components/user-choice";
import Play from "./components/play";

export default function App() {
    const [userChoice, setUserChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")
    const [win, setWin] = useState(0)
    const [lose, setLose] = useState(0)
    const choices = ['rock', 'paper', 'scissor']
    const [value, setValue] = useState('')
    const test = (value) =>{
        setUserChoice(value)}
    const [randomChoice, setRandomChoice] = useState(null)
    return (
        <div className="app">

            {/* information goes here */}

            <div className="info">
                <h2>Rock. Paper. Scissors</h2>

                {/* wins vs losses stats */}
                <Play userChoice={userChoice} win={win} lose={lose} setWin={setWin}
                      setLose={setLose}/>

                {/* the popup to show win/loss/draw */}
                {/* <div className="game-state"></div> */}

                <div className="choices">
                    {/* choices captions */}
                    <div>You</div>

                    {/* buttons for my choice */}

                    <HandleClick setUserChoice={setUserChoice} computerChoice={computerChoice}
                                 setComputerChoice={setComputerChoice}
                                 choices={choices} userChoice={userChoice} test={test} value={value} setValue={setValue}/>

                    <div className="vs">vs</div>

                    {/* show the computer's choice */}
                    <div>Computer</div>
                    <ComputerChoice randomChoice={randomChoice} setRandomChoice={setRandomChoice} choices={choices}
                                    userChoice={userChoice} setUserChoice={setUserChoice}
                                    setComputerChoice={setComputerChoice}/>
                </div>
            </div>
        </div>
    );
}

