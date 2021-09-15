import React, {useEffect} from 'react'
import Rock from "../../icons/Rock";
import Paper from "../../icons/Paper";
import Scissors from "../../icons/Scissors";

const HandleClick = (value, props) => {
    useEffect(() => {
    props.test(value);
    }, [props, value])

    return (
        <div>
            <button onClick={() => HandleClick("rock")} className="rock">
                <Rock/>
            </button>
            <button onClick={() => HandleClick("paper")} className="paper">
                <Paper/>
            </button>
            <button onClick={() => HandleClick("scissors")} className="scissors">
                <Scissors/>
            </button>
        </div>
    )
}

export default HandleClick