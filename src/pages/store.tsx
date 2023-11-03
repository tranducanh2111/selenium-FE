import React, { Fragment } from 'react'
import Head from 'next/head'
import ProductList from "@/page-sections/StorePage/ProductList"

const StorePage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Selenium Product</title>
      </Head>
      <div className="wrapper hidden md:block">
        <section>
            <img src="banner1.jpg" className="tiger" alt="Pet Tiger"/>
            <h1>Get Fashion</h1>
            <img src="banner3.jpg" className="dog" alt="Pet Dog"/>
            <div className="content">
                <p>
                    Shop the new fall collection of Selenium appareal. The hottest trends, 
                    the latest vibes, and the best eco-friendly quality.
                </p>
                <a href="#">
                    <span>Shop Now</span>
                    <svg width="228" height="8" viewBox="0 0 258 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z" fill="black"/>
                    </svg>
                </a>
            </div>
            <img src="banner4.jpg" className="fish" alt="Pet Fish"/>
        </section>
    </div>
      <div className="sm:pt-[60px] relative bg-white ">
        <ProductList/>
      </div>

      <style jsx>
      {`      
      .wrapper {
          width: 65%;
          margin: 0 auto;
      }

      section:before {
        color: #FFE8DF;
        position: absolute;
        content: 'SEL';
        font-weight: 800;
        z-index: -99;
        font-size: 16rem;
        top: -200px;
        left: -230px;
    }
      
      section {
          background: #F1EFE9;
          height: 500px;
          margin-bottom: 5em;
          padding: 2em;
          margin-top: 100px;
          display: grid;
          grid-template-areas:
              "tiger header header"
              "tiger dog content"
              "fish dog content";
          gap: 2em;
          grid-template-columns: repeat(2, 1fr) 2fr;
          grid-template-rows: auto 1fr 100px;
          position: relative;
          z-index: 99;
      }
      
      .tiger {
          grid-area: tiger;
      }
      h1 {
          grid-area: header;
          color: #FF6D33;
      }
      .dog {
          grid-area: dog;
      }
      .content {
          grid-area: content;
      }
      .fish {
          grid-area: fish;
      }
      
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 1/1;
      }
      
      h1 {
          font-size: 4rem;
          text-transform: uppercase;
          font-weight: 300;
          margin: 0;
          line-height: 1em;
      }
      
      p, a {
          font-size: 1.5rem;
          text-transform: uppercase;
      }
      p {
          margin: 0;
      }
      
      a {
          text-decoration: none;
          color: black;
          display: flex;
          align-items: center;
          gap: 1em;
          color: #FF6D33;
      }
      
      .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      `}
      </style>
    </Fragment>
  )
}

export default StorePage
