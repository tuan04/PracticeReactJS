import { useState } from "react";
import ShowList from "./ShowList";
const Calculator = () =>{
    // const [year, setYear] = useState();
    const [capital, setCapital] = useState();
    const [interestRate, setInterestRate] = useState();
    const [total, setTotal] = useState();
    const [list, setList] = useState([]);

    const renderBody = () => {
        const content = [];
    
        list.map(item => {
          content.push(
            <tr>
              <td>{item.year}</td>
              <td>{item.interest}</td>
              <td>{item.capital}</td>
              <td>{item.total}</td>
            </tr>
          );
        });
        console.log(content[0])
        return content;
    };

    const handleCal = () => {
        let capitalCre = capital;
        let thisYear = 2025;
        while(capitalCre < total){
            thisYear++;
            capitalCre += capitalCre * (interestRate*1.0 / 100);
            setList([...list, {
                year: thisYear,
                interest : interestRate,
                capital: capitalCre,
                total: total
            }])
        }
    }

    const handleOnChangCapital = (e) =>{
        setCapital(e.target.value);
    }

    const handleOnChanginterestRate = (e) =>{
        setInterestRate(e.target.value);
    }

    const handleOnChangTotal = (e) =>{
        setTotal(e.target.value);
    }

    return(
        <div>
            <div>
                <span>Capital: </span>
                <input type="text" onChange={(e) => handleOnChangCapital(e)}/>
            </div>
            <div>
                <span>Interest rate: </span>
                <input type="text" onChange={(e) => handleOnChanginterestRate(e)}/>
            </div>
            <div>
                <span>Total: </span>
                <input type="text" onChange={(e) => handleOnChangTotal(e)}/>
            </div>
            <div>
                <button onClick={handleCal()}>Tính toán</button>
            </div>
            <hr />
            <table>
                <tr>
                    <th>Year</th>
                    <th>Interest Rate</th>
                    <th>capitalCre</th>
                    <th>Total</th>
                </tr>
                {/* {renderBody()} */}
                {list.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{row.interest}</td>
                  </tr>
                ))}
            </table>
        </div>
    )
}

export default Calculator;