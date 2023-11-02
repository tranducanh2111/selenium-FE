import React, { Fragment } from 'react'
import Head from 'next/head'

const StorePage: React.FC = () => {
  return (
    <Fragment>
        <Head>
            <title>Contact Us</title>
        </Head>
        <div className="wrapper h-[100vh] w-[65%] mx-auto">
        <section className='h-[500px] mt-[20em] p-[2em] grid-cols-[1fr,1fr,2fr] grid-rows-[auto,1fr,100px] relatve'>
            <img src="https://assets.codepen.io/2621168/pet3.jpg" className="tiger" alt="Pet Tiger"/>
            <h1>Get Fashion</h1>
            <img src="https://assets.codepen.io/2621168/pet2.jpg" className="dog" alt="Pet Dog"/>
            <div className="content">
                <p>
                    Shop the new fall collection of wow appareal. The hottest trends, 
                    the latest vibes, and the best eco-friendly quality.
                </p>
                <a href="#">
                    <span>Shop wow</span>
                    <svg width="258" height="8" viewBox="0 0 258 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z" fill="black"/>
                    </svg>
                </a>
            </div>
            <img src="https://assets.codepen.io/2621168/pet1.jpg" className="fish" alt="Pet Fish"/>
        </section>
    </div>
    </Fragment>
  )
}

export default StorePage