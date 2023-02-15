import React, { PropsWithChildren } from 'react'
import cl from './Form.module.css'


export default function Form({children, action, method}:
   PropsWithChildren<{action?: string, method?: string}>) {
  return (
    <form className={cl.Form} action={action} method={method}>
      {children}
    </form>
  )
}
