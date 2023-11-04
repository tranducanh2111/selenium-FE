import Button from '@/components/Buttons/Button'
import Heading from '@/components/Heading'
import React from 'react'
import ArrowRight from 'public/arrow-right-white.svg'
const OtherProductList = () => {

  const handleClick = () => {
    window.location.href = '/store'
  }

  return (
    <div className="xl:w-[1070px] space-y-[20px] sm:space-y-[40px] hidden sm:block m-auto">
      <div className='bg-[#FF6D33] py-[32px] px-[24px] rounded-[12px] mx-[20px] xl:mx-0'>
          <div className="introduction flex flex-col sm:flex-row items-center w-[100%]">
            <Heading
              title="Product"
              description="Stay ahead of the curve with our newest products, innovations, and must-haves. From cutting-edge tech to timeless classics, find what's trending and elevate your lifestyle with our latest offerings."
              titleClassName="text-h2 font-bold"
              descriptionClassName="my-[8px]"
              className="w-[100%] sm:max-w-[432px] text-white"
            />
            <div className="view_more_button ml-auto hidden sm:block">
              <Button
                title="View More"
                icon={ArrowRight}
                onClick={handleClick}
                classNameIcon="mr-[8px]"
                className="flex items-center text-white rounded-[7px] bg-[#FF7F4D] px-[15px] py-[4px]"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default OtherProductList