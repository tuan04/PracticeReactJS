import React from 'react'
import Logo from '../assets/Image 1858.png'
import { NavLink } from 'react-router-dom'
import dasborad from '../assets/Squares four 1.png'
import folder from '../assets/Folder.png'
import team from '../assets/Groups.png'
import analys from '../assets/Pie chart.png'
import mess from '../assets/Chat.png'
import code from '../assets/Code.png'
import group from '../assets/Group.png'

export default function Nav() {
    return (
        <div className='p-2'>
            <img src={Logo} alt=""className='mb-4'/>
            <div className='grid grid-flows-col'>
                <NavLink className="flex mx-2 py-4 rounded"> <img src={dasborad} alt="" />Dashboard</NavLink>
                <NavLink className="flex mx-2 py-4 rounded"><img src={folder} alt="" />Project</NavLink>
                <NavLink className="flex mx-2 py-4 rounded"><img src={team} alt="" />Teams</NavLink>
                <NavLink className="flex mx-2 py-4 rounded"><img src={analys} alt="" />Analytics</NavLink>
                <NavLink className="flex mx-2 py-4 rounded"><img src={mess} alt="" />Messages</NavLink>
                <NavLink className="flex mx-2 py-4 rounded"><img src={code} alt="" />Integration</NavLink>
            </div>
            <div className='mt-10 grid grid-flows-row text-center p-4 gap-2 bg-[rgb(240,246,255)]'>
                <img src={group}/>
                <p>V2.0 is available</p>
                <button className='border rounded py-2'>Try now</button>
            </div>
        </div>
    )
}
