import React from 'react'
import './Modal.css'
import { ModalArgs } from '../../../assets/types'


export default function Modal({active, setActive, children}: ModalArgs) {
  return (
    <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
      <div className={active ? "Modal__content active" : "Modal__content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
