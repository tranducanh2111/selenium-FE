import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

export default function Banner() {

    const images = [
        '/banner1.jpg',
        '/banner2.jpg',
        '/banner3.jpg',
        '/banner4.jpg',
    ];

    return (
            <Swiper
                pagination={{
                    clickable: true, // Allow user to click on the button to change the slide
                }}
                modules={[Pagination,Autoplay,EffectCoverflow]}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                autoplay={{
                    delay: 6000, // Auto change to next slide after every 6s
                }}
                // Only allow 1 slide per view
                slidesPerView={1}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={`carousel-item-${index}`}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[24rem] sm:h-[22rem] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
  );
}