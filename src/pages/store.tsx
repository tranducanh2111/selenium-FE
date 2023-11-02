import React, { Fragment } from 'react'
import Head from 'next/head'
import ProductList from "@/page-sections/StorePage/ProductList"

const StorePage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Selenium Product</title>
      </Head>
      <div className="homepage relative bg-white">
        <ProductList/>
      </div>
    </Fragment>
  )
}

export default StorePage
