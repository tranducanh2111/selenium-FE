import Image from 'next/image'
import { StaticImageData } from 'next/image'
import ArrowRight from 'public/Blog/ArrowRight.svg'
export interface BlogItemProps {
  image: StaticImageData
  title: string
  description: string
}

const BlogCard: React.FC<BlogItemProps> = ({ image, title, description }) => {
  return (
    <div className="max-w-[338px] h-[407px] flex flex-col items-start xs:gap-[20px] gap-[15px] xs:pb-[16px] pb-[12px] xs:rounded-[12px] rounded-[9px] bg-neutral-[#FAFAFA] shadow-xl">
       <Image
        className="flex max-w-auto max-h-auto rounded-tl-[9px] rounded-tr-[9px] xs:rounded-tl-[12px] xs:rounded-tr-[12px]"
        src={image}
        alt="image"
      /> 
      <div className="w-full h-full pl-[16px] pr-[16px] gap-[8px] flex flex-col">
        <div className="text-[24px] text-[#000000] font-roboto font-[400] leading-[32px] ">
          {title}
        </div>
        <div className="text-body text-[#7E868C] ">
          {description}
        </div>
        <button className="flex items-center gap-[8px] rounded-[8px]">
            <div className="text-[14px] text-[#FF5A1A] font-roboto font-[500] leading-[22px]">
                Read blog
            </div>
            <Image
            className="w-[14px] h-[14px]"
            src={ArrowRight}
            alt="ArrowRight"/>
        </button>
      </div>
    </div>
  )
}
export default BlogCard
