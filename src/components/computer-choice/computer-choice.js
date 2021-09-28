import React from 'react'

const ComputerChoice = ({setComputerChoice, choices}) => {
    return (
        <div>
            <button onClick={() => {
                setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
            }} className="computer-choice">?
            </button>
        </div>
    )
}

export default ComputerChoice