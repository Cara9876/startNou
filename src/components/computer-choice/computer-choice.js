import React, {useEffect} from 'react'

const ComputerChoice = props => {
    useEffect(() => {
        props.setRandomChoice(props.choices[Math.floor(Math.random() * props.choices.length)])
    },[props, props.randomChoice])
    return (
        <div>
            <button onClick={() => props.setComputerChoice(props.randomChoice)} className="computer-choice">?</button>
        </div>
    )
}

export default ComputerChoice