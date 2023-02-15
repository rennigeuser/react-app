import React, { useContext } from 'react'
import './ProductsSection.css'
import Product from '../Product/Product'
import { ProductData } from '../../assets/types'
import { AuthContext } from '../../context';
import Loader from '../UI/Loader/Loader';


export default function ProductsSection({ products }: { products: ProductData[] }) {
  
  const { isLoading } = useContext(AuthContext);
  

  return (
    <section className='Products'>
      <div className='products-container'>
        {products.map((p, i) =>
         <Product title={p.title} picture={p.picture} alt={p.alt} key={i}/>)}     
      </div>
    </section>
  )
}
