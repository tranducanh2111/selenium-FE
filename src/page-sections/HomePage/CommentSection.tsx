import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import TestimonialCard from '@/components/Testimonial/TestimonialCard'
import { items } from '@/components/Testimonial/TestimonialItems'

const TestimonialsSection: React.FC = () => {
  return (
    <div className="relative max-w-screen overflow-hidden h-[422px]">
      <div className="w-full h-[290px] bg-[#FF6D33] absolute " />

      <div className="max-w-[1160px] h-[302px] flex flex-col mx-auto mt-[60px] mb-10 px-5 lg:px-0">
        <div className="max-w-[1160px] items-center w-full h-[302px] mx-auto flex flex-col inline-flex absolute top-[60px] xl:px-5">
          <div className="w-full">
            <div className="w-full sm:w-[405px] h-[86px] flex flex-col items-start gap-[4px] inline-flex ">
              <div className="text-[#FFFFFF] text-[32px] font-[700] font-Roboto leading-[38.40px]">
                Comments
              </div>
              <div className="text-[#FFFFFF] text-[16px] font-[400] font-Roboto leading-[22.4px] tracking-[0.32px] ">
                Hear What Others Are Saying! Check out what our satisfied customers have to say about their experiences with us.
              </div>
            </div>
          </div>
        </div>
      </div>

        <Swiper
          className="justify-start items-start gap-6 inline-flex bottom-[200px] h-[200px]"
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          autoplay={{
            delay: 5000,
          }}
          speed={1000}
          pagination={{ clickable: true }}>
          {items.map((item, index) => (
            <SwiperSlide
              className="top-[10px] px-4 py-2 bg-[#FFFFFF] rounded-[12px] shadow-lg flex-col justify-start items-start gap-1 inline-flex transition duration-300 ease-in-out hover:scale-[1.05]"
              key={index}
              style={{ maxWidth: '300px', width: '100%', height: '176px' }}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default TestimonialsSection