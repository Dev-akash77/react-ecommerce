import React from 'react'
import Search from '../components/Product/Search'
import Allfilter from '../components/Product/Allfilter'
import Allproduct from '../components/Product/Allproduct'

const Products = () => {
  return (
    <div className='pagestart'>
      <Search />
      <div className="all_filter_products cc mt-3 mb">
       <div className="container gap-3 f_p">
       <Allfilter />
       <Allproduct />
       </div>
      </div>
    </div>
  )
}

export default Products