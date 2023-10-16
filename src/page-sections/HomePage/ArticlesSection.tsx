import { ArticleProps } from '@/components/Article/Article'
import ArticleList from '@/components/Article/ArticleList'
import ArrowRight from 'public/arrow-right.svg'
import TestImg from 'public/Test.png'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import HeadingSection from '@/components/SectionHeader'

const ArticlesSection: React.FC = () => {
  const tests: ArticleProps[] = [
    {
      imgSrc: TestImg,
      description:
        'Nike x Jordan 2024 Spring Collection',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Champion x Adidas x Levi 2024 Spring Collection',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Releasing dates of Nike x J. Balvin All-Star Collection 2024',
      url: 'https://www.google.com/',
    },
  ]

  return (
    <div className="max-w-[1190px] sm:px-[40px]">
      <div className="introduction">
        <HeadingSection
          headingText={"What's next?"}
          paragraphText={"Explore the Latest Arrivals! Stay ahead of the curve with our newest products, innovations, and must-haves. From cutting-edge tech to timeless classics, find what's trending and elevate your lifestyle with our latest offerings."}
          viewMoreLink={"#"}
          showFilterBar={false}
        />
      </div>
      <div className="w-[90%] mx-auto sm:w-[100%] hidden sm:block">
        <ArticleList articles={tests} />
      </div>
      <div className="w-[90%] mx-auto sm:w-[100%] block sm:hidden">
          <Swiper
            className="my-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {tests.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-4 ">
                  <div className="image">
                    <Image
                      src={article.imgSrc}
                      alt="test"
                      width={130}
                      height={130}
                      className="rounded-lg max-w-[90px] max-h-[90px]"
                    />
                  </div>
                  <div>
                    <p className="font-bold lg:max-w-[250px] h-[72px] line-clamp-3 overflow-hidden">
                      {article.description}
                    </p>
                    <button className="flex items-center my-[8px] text-body font-bold text-primary gap-2 pl-0">
                      <p>Read article</p>
                      <Image
                        src={ArrowRight}
                        alt="Logo"
                        width={15}
                        height={15}
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  )
}

export default ArticlesSection
