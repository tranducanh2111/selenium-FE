import React, { Fragment } from 'react'
import Head from 'next/head'
import ProductList from "@/page-sections/StorePage/ProductList"

const StorePage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Selenium Product</title>
      </Head>
      <div className='bg-white'>
        <div className="wrapper sm:min-width-[690px] sm:max-width-[1100px] w-full sm:w-[65%] my-0 mx-auto">
            <section className='sm:mt-[100px] space-y-[16px] sm:space-y-0'>
                <img src="banner1.jpg" className="tiger hidden sm:block" alt="Pet Tiger"/>
                <h1>Get Fashion</h1>
                <img src="banner3.jpg" className="dog hidden sm:block" alt="Pet Dog"/>
                <div className="content">
                    <p>Shop the new fall collection of Selenium appareal. The latest trends, and the best eco-friendly quality.</p>
                    <a href="#">
                        <span className='hover:text-[#F4A261] w-[133px]'>Shop Now</span>
                        <svg width="85" height="8" viewBox="0 0 258 8" fill="#FF6D33" xmlns="http://www.w3.org/2000/svg">
                            <path d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z" fill="#FF6D33"/>
                        </svg>
                    </a>
                </div>
                <img src="banner4.jpg" className="fish hidden sm:block" alt="Pet Fish"/>
            </section>
    </div>
      <div className="sm:pt-[60px] relative bg-white ">
        <ProductList/>
      </div>
    </div>
      <style jsx>
      {`
    @media (min-width: 768px) {
        section:before {
            color: #ff9f7a;
            position: absolute;
            content: 'SEL';
            font-weight: 800;
            z-index: -99;
            font-size: 16rem;
            top: -200px;
            left: -300px;
        }

        section {
          background: #f8f7f4;
          height: 500px;
          margin-bottom: 5em;
          padding: 2em;
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

      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 1/1;
      }

      .tiger {
        grid-area: tiger;
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
    }
      
      section {
          background: #f8f7f4;
          margin-bottom: 5em;
          padding: 2em;
          position: relative;
      }

      h1 {
          grid-area: header;
          color: #FF6D33;
      }

          .tiger {
        grid-area: tiger;
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
      
      h1 {
          font-size: 4rem;
          text-transform: uppercase;
          font-weight: 500;
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
