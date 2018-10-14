import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import './navlink.css'

const NavLink = ({ title, path, exact = false }) => (
   <Link to={ path } activeClassName="link-active" className="no-underline" exact={exact}>
        <div className="nav-link w-full px-5 py-10 cursor-pointer">
            <span className="text-white font-normal text-lg">{ title }</span>
        </div>
   </Link>
)

export default NavLink