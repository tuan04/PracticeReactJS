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
import NavItem from './NavItem'

export default function Nav() {
    return (
        <div className='px-6 relative h-screen border-r border-gray-300'>
            <img src={Logo} alt=""className='my-2'/>
            <div className='grid grid-flows-col gap-3 mt-5'>
                <NavItem icon={dasborad} content="Dashborad"/>
                <NavItem icon={folder} content="Project"/>
                <NavItem icon={team} content="Teams"/>
                <NavItem icon={analys} content="Analytics"/>
                <NavItem icon={mess} content="Messages"/>
                <NavItem icon={code} content="Integration"/>
            </div>
            <div className='absolute bottom-0 rounded grid grid-flow-row text-center p-4 gap-2 bg-[rgb(240,246,255)]'>
                <img src={group}/>
                <p className='font-bold'>V2.0 is available</p>
                <button className='border rounded py-1 text-[rgb(43,128,255)]'>Try now</button>
            </div>
        </div>
    )
}
