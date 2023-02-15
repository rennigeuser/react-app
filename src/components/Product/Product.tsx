import React from 'react'
import './Product.css'
import { ProductData } from '../../assets/types'


export default function Product({title, picture, alt }: ProductData) {
  return (
    <div className='product-cell'>
      <div className='product-cell__inner-content'>
        <img className='inner-content__picture' src={picture} alt={alt} />
        <span className="inner-content__title">{title}</span>
      </div>
    </div>
  )
} 
