import React, { Fragment } from 'react'
import Head from 'next/head'
import ProductSection from '@/page-sections/HomePage/CourseSection'
import HomeBanner from '@/components/Banner'
import TestimonialsSection from '@/page-sections/HomePage/CommentSection'
import WorkshopSection from '@/page-sections/HomePage/WorkshopSection'
import ArticlesSection from '@/page-sections/HomePage/ArticlesSection'

const Home: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>IELTS PLATFORM</title>
      </Head>
      <div className="homepage relative bg-white">
        <HomeBanner/>
        <div className="max-w-[1190px] flex flex-col mx-auto mt-[60px] mb-10 gap-[60px] px-5">
          <ProductSection
            sectionName={"New Arrivals"}
            viewMoreLink={"#"}
            description={"Explore the Latest Arrivals! Stay ahead of the curve with our newest products, innovations, and must-haves. From cutting-edge tech to timeless classics, find what's trending and elevate your lifestyle with our latest offerings."}
            showFilter={true}
          />
           <ProductSection
            sectionName={"Best seller"}
            viewMoreLink={"#"}
            description={"With its lightweight design, unmatched durability, and superior grip, our products are the choice of champions. Elevate your game to new heights with this powerhouse."}
            showFilter={false}
          />
          <ArticlesSection/>
          <WorkshopSection />
        </div>
        <TestimonialsSection />
      </div>
    </Fragment>
  )
}

export default Home
