import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import AdvertCarousel from '../components/AdvertCarousel/AdvertCarousel'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import Loader from '../components/UI/Loader/Loader'
import useFetch from '../hooks/useFetch'
import { getPageCount } from '../utils/pagination'
import { ProductData } from '../assets/types'
import useObserver  from '../hooks/useObserver'





export default function Products() {

  const slides = [
    'http://localhost:3000/images/slides/flower.jpg',
    'http://localhost:3000/images/slides/pexels-pixabay-33109.jpg',
  ]


  const [products, setProducts] = useState<ProductData[]>([]);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);


  const lastElementRef = useRef<any>();


  const [fetchProducts, isLoading, error] = useFetch(async (limit, page) => {
    const response = await PostService.getAll(limit, page);

    setProducts([...products, ...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })


  useObserver(lastElementRef, page < totalPages, isLoading, () => setPage(page + 1));
  
  useEffect(() => {
    fetchProducts(limit, page);
  }, [page])


  return (
    <>

      <AdvertCarousel slides={slides}/>
      <ProductsSection products={products}/>

      {error && console.log(error)}
      <div ref={lastElementRef} style={{height:'50px'}}></div>
      {isLoading &&
        <div style={{display:'flex', alignItems:'center', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/>
        </div>
      }
    </>
  )
}