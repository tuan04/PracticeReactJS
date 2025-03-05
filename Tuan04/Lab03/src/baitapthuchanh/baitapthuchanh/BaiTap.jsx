import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BaiTap.css'

const BaiTap = (props) => {

    const [dataMock, setDataMock] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let data = await axios.get('https://67c83d650acf98d070858e8d.mockapi.io/item')
        console.log('data mock: ', data);
        setDataMock(data.data)
    }

    const click = (item) => {
        console.log('click: ', item);
    }

    return (
        <div className='row'>
            {dataMock && dataMock.length !== 0 &&
                dataMock.map((item, index) => {
                    return (
                        <div id={`id${index}`} className="card col-3">
                            <img src={item.img} />
                            <p>{item.name}</p>
                            <button onClick={(event) => {click(item)}}>Click me</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BaiTap;