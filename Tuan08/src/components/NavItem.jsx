import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
    const {content, icon, toPath} = props;
    const className = "flex text-sm text-gray-700 rounded items-center gap-2 py-1 px-2";
    const classNameActive = "flex text-sm text-white font-bold bg-[rgb(245,76,135)] rounded items-center gap-2 py-1 px-2";
  return (
    <NavLink to={toPath} className={({isActive}) => isActive ? classNameActive : className}><img src={icon}/>{content}</NavLink>
  )
}
