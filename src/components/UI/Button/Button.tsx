import React from 'react'
import cl from './Button.module.css'
import { Props } from '../../../assets/types'

export default function Button({onClick, children, ...props}: Props) {
  return (
    <button className={cl.Button} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
