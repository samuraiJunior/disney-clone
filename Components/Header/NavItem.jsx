import Image from 'next/image'
import React from 'react'
import s from "./Header.module.scss"

const NavItem = ({ src, reactIcon = false, text, alt, handleClick}) => {
    return (
        <li onClick={handleClick} className={s.NavItem}>
            {reactIcon ? src : <Image width={"30px"} height={"30px"} src={src} alt={alt} />}
            <h3>{text}</h3>
        </li>
    )
}

export default NavItem
