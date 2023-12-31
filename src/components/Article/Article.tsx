import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import ArrowRight from 'public/arrow-right.svg'

export interface ArticleProps {
  imgSrc: StaticImageData
  description: string
  url: string
}

const Article: React.FC<ArticleProps> = ({ imgSrc, description, url }) => {
  const handleClick = () => {
    console.log(url) // eslint-disable-line no-console
    //handle to redirect to url
  }

  return (
    <div className="flex gap-4 hover:scale-[1.05] transition duration-200 ease-in-out">
      <div className="image">
        <Image
          src={imgSrc}
          alt="test"
          width={130}
          height={130}
          className="rounded-lg max-w-[90px] max-h-[90px]"
        />
      </div>
      <div>
        <p className="font-bold lg:max-w-[250px] h-[48px] line-clamp-2 overflow-hidden ">{description}</p>
        <button
          className="text-[#FF5A1A] flex items-center my-[8px] text-body font-bold gap-2 pl-0"
          onClick={handleClick}>
          <p className='text-[#FF5A1A]'>Read article</p>
          <Image src={ArrowRight} alt="Logo" width={15} height={15} />
        </button>
      </div>
    </div>
  )
}

export default Article