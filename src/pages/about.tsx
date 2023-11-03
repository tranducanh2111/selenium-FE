import React, { Fragment } from 'react'
import Head from 'next/head'
import BlockSection from '@/page-sections/About/BlockSection'
import OtherProductList from '@/page-sections/About/OtherProductList'
import AdditionalCourses from '@/page-sections/About/AdditionalCourses'

const StorePage: React.FC = () => {
  return (
    <Fragment>
        <Head>
            <title>Contact Us</title>
        </Head>
        <div className="bg-white space-y-[60px] pt-[40px] pb-[60px]">
            <div className="bg-white max-w-[1160px] flex flex-col mx-auto gap-[60px] px-5">
                <BlockSection />
                <OtherProductList />
                <AdditionalCourses />
                <BlockSection />
            </div>
        </div>
    </Fragment>
  )
}

export default StorePage