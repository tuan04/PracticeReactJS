import React, { useEffect, useState } from 'react'
import dasborad from '../assets/Squares four 1.png'
import OverviewItem from './OverviewItem'
import cart from '../assets/Button 1509.png'
import money from '../assets/Button 1529.png'
import userIcon from '../assets/Button 1530.png'
import { getNewCust, getProfit, getTurnOver } from '../server/api';
export default function Overview() {
    const [turnover, setTurnover] = useState({});
    const [profit, setProfit] = useState({});
    const [newCust, setNewCust] = useState({});

    useEffect(() => {
            const fetchData = async () => {
                try{
                    const data1 = await getTurnOver();
                    const data2 = await getProfit();
                    const data3 = await getNewCust();
                    setTurnover(data1);
                    setProfit(data2);
                    setNewCust(data3);
                }catch(error){
                    console.error('Error fetching statistics:', error);
                }
            };
            fetchData();
    }, [])

    const formatUSD = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    }

  return (
    <div className='p-4'>
        <div className='flex gap-2 font-bold text-lg my-2'><img src={dasborad} /> Overview</div>
        <div className='grid grid-flow-col gap-5 mt-3'>
            <OverviewItem title="Turnover" icon={cart} poc={turnover.poc} metric={formatUSD(turnover.metric)} bgColor="bg-[rgb(255,240,245)]"/>
            <OverviewItem title="Profit" icon={money} poc={profit.poc} metric={formatUSD(profit.metric)} bgColor="bg-[rgb(240,246,255)]"/>
            <OverviewItem title="New customer" icon={userIcon} poc={newCust.poc} metric={newCust.metric} bgColor="bg-[rgb(240,247,252)]"/>
        </div>
    </div>
  )
}
