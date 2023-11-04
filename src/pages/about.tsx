import React, { Fragment } from 'react'
import Head from 'next/head'
import BlockSection from '@/page-sections/About/BlockSection'
import OtherProductList from '@/page-sections/About/OtherProductList'
import AdditionalCourses from '@/page-sections/About/AdditionalCourses'
import FacebookLogo from '@/components/Icons/bigfacebook';
import TwitterLogo from '@/components/Icons/bigtwitter';
import InstagramLogo from '@/components/Icons/biginstagram';
import GitHubLogo from '@/components/Icons/biggithub';

const AboutUsPage: React.FC = () => {
  return (
    <Fragment>
        <Head>
            <title>About Us</title>
        </Head>
        <div className="bg-white space-y-[60px]">
          <div className='w-full aspect-[470/600] sm:aspect-[1290/500] sm:grid sm:grid-cols-2'>
            <div className='sm:col-span-1 relative'>
              <div className='sm:absolute sm:bottom-[20%] sm:left-[32px] ml-[32px] mb-[32px] sm:m-0'>
                <p className='tracking-widest'>ABOUT</p>
                <h1 className='text-h1 text-[42px] tracking-wider'>Selenium</h1>
              </div>
            </div>
            <img src={"/factory.jpg"} alt={"an image"} className='col-span-1 h-full w-full object-cover' />
          </div>
          <div className='max-w-[1160px] mx-auto px-5 sm:px-10'>
            <p className='text-body'>Welcome to Selenium, your premier destination for sports gear, apparel, and equipment. We are passionate about sports and fitness, and we&apos;re here to help you pursue your athletic dreams. Our online store is dedicated to providing you with top-quality products and an unmatched shopping experience.</p>
          </div>
          <div className='max-w-[1160px] mx-auto px-5 sm:px-10 space-y-[12px]'>
            <h2 className='text-h2 font-semibold'>Our Commitment to Quality</h2>
            <p className='text-body'>We understand the importance of high-quality sports equipment and apparel in achieving your best performance. That&apos;s why we work tirelessly to curate a selection of the finest products from renowned brands, ensuring you have access to the best gear for your chosen sport.</p>
          </div>
          <div className="bg-white max-w-[1160px] flex flex-col mx-auto gap-[60px] px-5">
              <BlockSection />
              <div className='max-w-[1160px] mx-auto px-5 sm:px-10 space-y-[12px]'>
                <h2 className='text-h2 font-semibold'>Stay up-to-date with us</h2>
                <p className='text-body'>Stay updated with the latest sports trends, gear reviews, and exclusive offers by following us on social media. We love connecting with our customers and fellow athletes, so don&apos;t hesitate to reach out with any questions or feedback.</p>
              </div>
              <div className='max-w-[1160px] mx-auto px-5 sm:px-10 space-x-[24px]'>
                <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><FacebookLogo /></a></button>
                <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><TwitterLogo /></a></button>
                <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><InstagramLogo /></a></button>
                <button className='hover:scale-[1.1] transition duration-200 ease-in-out'><a href=""><GitHubLogo /></a></button>
              </div>
              <OtherProductList />
              <AdditionalCourses />
          </div>
        </div>
    </Fragment>
  )
}

export default AboutUsPage