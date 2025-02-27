import { useState } from "react";
import Input from "./Input";
import PrintList from "./PrintList";
import investMoney from "../img/invest-money.jpg";
const Application = () => {
    const [list, setList] = useState([]);

    const generateList = (iInvestMoney, iRate, iGoal) =>{
        let investMoney = iInvestMoney;
        let rate = iRate;
        let goal = iGoal;
        let year = 2025;
        let arr = [];

        while(investMoney < goal){
            let moneyEndYear = investMoney * (1 + (rate*0.1/100));
            let newRow = {year: year++, money: investMoney, rate: rate, endYear: moneyEndYear};
            investMoney = moneyEndYear;
            arr.push(newRow);
        }
        setList(arr);
        console.log(list)
    }

    return(
        <div>
            <img src={investMoney} alt="" width={700}/>
            <Input generateList = {generateList}/>
            <hr />
            <PrintList list={list}/>
        </div>
    )
}

export default Application;