import React from 'react'
import cl from './Input.module.css'
import { Ref, Props } from '../../../assets/types';

const Input = React.forwardRef<Ref, Props>((props, ref) => (
  <input ref={ref} className={cl.Input} {...props} />
));


export default Input;