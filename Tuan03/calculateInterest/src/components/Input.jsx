import { useState } from "react";
import PropTypes from 'prop-types';
import './InputCss.css'
const Input = (props) => {
    const [investMoney, setInvestMoney] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);

    const handleChangeOnSubmit = () =>{
        props.generateList(investMoney, rate, goal);
    }

    const handleOnChangeInvestMoney = (e) => {
        setInvestMoney(e.target.value)
    }

    const handleOnChangeRate = (e) =>{
        setRate(e.target.value)
    }

    const handleOnChangeGoal = (e) =>{
        setGoal(e.target.value)
    }

    return(
        <div>
            <div className="inputBox">
                <label>Input your invest money: </label>
                <input type="text" onChange={(e) => handleOnChangeInvestMoney(e)}/>
            </div>
            <div className="inputBox">
                <label>Input rate: </label>
                <input type="text" onChange={(e) => handleOnChangeRate(e)}/>
            </div>
            <div className="inputBox">
                <label>Input your Goal: </label>
                <input type="text" onChange={(e) => handleOnChangeGoal(e)}/>
            </div>
            <button onClick={handleChangeOnSubmit}>Click</button>
        </div>
    )
}

Input.propTypes = {
    generateList: PropTypes.func.isRequired
}
export default Input;