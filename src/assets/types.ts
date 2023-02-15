import React, { ReactNode } from "react"


export interface ProductData { 
  title: string,
  picture: string,
  alt?: string,
  body?: string
}


export interface contextStorage {
  isAuth: boolean,
  setIsAuth(v: boolean): void,
  isLoading: boolean,
  setIsLoading(v: boolean): void
}


export interface ModalArgs {
  active: boolean,
  setActive(value: boolean): void
  children?: React.ReactNode
}


export interface Props {
  children?: ReactNode;
  [key: string]: any;
}


export type Ref = HTMLInputElement



export interface InputArgs extends React.PropsWithRef<any>{ }
