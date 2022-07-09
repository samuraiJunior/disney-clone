import Image from 'next/image'
import React from 'react'
import s from "./Button.module.scss"

const Button = ({ color, text, play }) => {
    return (
        <button className={color ? `${s.buttonComponent} ${s.white}` : s.buttonComponent} onClick={()=>play(true)}>
            <Image
                src={color?"/images/play-icon-black.svg":"/images/play-icon-white.svg"}
                alt="play"
                layout='fixed'
                width={30}
                height={30}
                style={{marginLeft:"-7px"}}
            />
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button
