import { useState , useEffect} from "react";
import Item from "./Item";
import {Row} from 'react-bootstrap'
const NewPage = () =>{
    const [items, setItems] = useState([]);

    
    useEffect(() =>{
        fetch('https://67c83d650acf98d070858e8d.mockapi.io/item').then((r) => r.json())
        .then((data) => setItems(data))   
        }
    , []);

    return (
        <>
          <Row className="gap-2">
            {items.map((item) => {
              return(
                <div key={item.id} className="col-3 m-0 p-0">
                  <Item item = {item}></Item>
                </div>
              ) 
            })}
         </Row>
        </>
      )

}
export default NewPage