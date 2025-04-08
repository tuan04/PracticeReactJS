import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
    const {content, icon} = props;
    const className = "flex text-sm text-gray-700 rounded items-center gap-2 py-1 px-2";
  return (
    <NavLink className={className}><img src={icon}/>{content}</NavLink>
  )
}
