import React, { SyntheticEvent, useRef } from 'react'
import Modal from '../UI/Modal/Modal'
import { ModalArgs } from '../../assets/types'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'


export default function SignUpModal({active, setActive}: ModalArgs) {
  
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  function handleClick(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    userNameRef.current!.value = "";
    passwordRef.current!.value = "";
    repeatPasswordRef.current!.value = "";
  }

  return (
    <Modal active={active} setActive={setActive}>
      <Form>
        <Input ref={userNameRef} type="text" placeholder="Username" />
        <Input ref={passwordRef} type="password" placeholder="Password" />
        <Input ref={repeatPasswordRef} type="password" placeholder="Repeat your password" />
        <Button onClick={handleClick} type="submit">Sign Up</Button>
      </Form>
    </Modal>    
  )
}
