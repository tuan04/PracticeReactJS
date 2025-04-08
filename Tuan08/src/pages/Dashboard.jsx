import React from 'react'
import Overview from '../components/Overview'
import OrderTable from '../components/orderTable'

export default function Dashboard() {
  return (
    <div>
      <Overview/>
      <OrderTable/>
    </div>
  )
}
