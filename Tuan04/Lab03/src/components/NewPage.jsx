import { useState , useEffect} from "react";
import Item from "./Item";
const NewPage = () =>{
    const [items, setItems] = useState([]);
    let fn;
    // useEffect(() =>{
    //     fn = fetch('https://67c83d650acf98d070858e8d.mockapi.io/item').then((r) => r.json())
    //     .then((data) => setItems(data))   
    //     }
    // , []);

    const [data, setData] = useState([])

    

    return (
        <>
          <ul>
            {items.map((item) => {
              return(
                <li key={item.id}>
                  <Item item = {item}></Item>
                </li>
              ) 
            })}
         </ul>
        </>
      )

}
export default NewPage