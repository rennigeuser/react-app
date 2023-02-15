import React, { useContext, useState } from 'react'
import AdvertCarousel from '../components/AdvertCarousel/AdvertCarousel'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import { AuthContext } from '../context'


export default function Products() {

  const slides = [
    'http://localhost:3000/images/slides/flower.jpg',
    'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg',
  ]

  const products = [
    {title: 'Lorem ipsum dolor sit amet consecectetur ameectetur ameectetur ameectetur ametetur amet consectetur amet consectetur amet consectetur amet consectetur amet consectetur adipisicing elit. Dolorum tempore ex praesentium quasi explicabo corrupti repudiandae odio at doloribus harum, culpa animi sint assumenda debitis ipsa. Placeat tempora eos quis.', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
    {title: 'consectsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetetur adipisicing elit. Dolorum tempore ex praesentium quasi', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
    {title: 'addolor sit amet consecectetur ameectetur ameectetur ameectetur ametetdolor sit amet consecectetur ameectetur ameectetur ameectetur ametetdolor sit amet consecectetur ameectetur ameectetur ameectetur ametetip', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
    {title: 'Tit ipsum dolor sit amet consectetu ipsum dolor sit amet consectetule5', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
    {title: 'Tidolor sit amet consececsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectettetur ameectetur ameectetur ameectetur ametettle3', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
    {title: 'fdsfdsfdfdorem ipsum dolor sit amet consectetusfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetsfdsfdfdorem ipsum dolor sit amet consectetr ', picture: 'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg'},
  ]
  
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <AdvertCarousel slides={slides}/>
      {
        isAuth
        ?
        <ProductsSection products={products}/>
        :
        <ProductsSection products={products.slice(0, 4)}/>
      }
      
    </>
  )
}