import React from 'react'
import Bell from '../assets/Bell 1.png'
import Question from '../assets/Question 1.png'
import avatar from '../assets/Avatar (1).png'
export default function Header() {
  return (
    <div className='grid grid-flow-col content-between py-2'>
        <h2 className='text-[rgb(245,76,135)] font-bold text-3xl'>Dashboard</h2>
        <div className='flex gap-5 justify-end'>
            <input type="text" placeholder='Search...' className='border rounded px-3'/>
            <img src={Bell} alt="" />
            <img src={Question} alt="" />
            <img src={avatar} alt="" />
        </div>
    </div>
  )
}
