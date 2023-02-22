import React, { useContext, useRef, SyntheticEvent } from 'react'
import { ModalArgs } from '../../assets/types'
import { AuthContext } from '../../context'
import Modal from '../UI/Modal/Modal'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'


export default function SignInModal({active, setActive}: ModalArgs) { 

  const { setIsAuth, authenticate } = useContext(AuthContext);  

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  function handleClick(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    userNameRef.current!.value = "";
    passwordRef.current!.value = "";
    authenticate();
    setActive(false);
  }


  return (
    <Modal active={active} setActive={setActive}>
        <Form>
          <Input ref={userNameRef} type="text" placeholder="Username" />
          <Input ref={passwordRef} type="password" placeholder="Password" />
          <Button onClick={handleClick} type="submit">Sign In</Button>
        </Form>
    </Modal>
  )
}
