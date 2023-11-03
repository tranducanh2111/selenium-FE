// Card.js
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Buttons/Button';
import ArrowSvg from 'public/arrow-head.svg';

// Define the prop types for the Card component
type CardProps = {
    imageURL: string;
    name: string;
    descriptions: string;
    testURL?: string;
    price?: number;
    category?: string;
};

const PrimaryCard: React.FC<CardProps> = ({ imageURL, name, descriptions, testURL, price, category }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
        <section className={`h-[460px] w-full max-w-[300px] sm:max-w-[314px] aspect-[314/381] rounded-[12px] bg-[#FBFDFF] shadow-lg`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <figure className="relative w-[100%] h-[65%] mb-[12px] object-cover">
                <Image src={imageURL} alt={name} layout='fill' className='w-full h-full object-cover rounded-t-[12px]' />
            </figure>
            <article className={`px-[16px] sm:space-y-[12px] space-y-[9px] ${isHovered ? 'hidden' : ''}`}>
                <h3 className='text-h3 line-clamp-1'>{name}</h3>
                <p className='overflow-y-hidden h-[44px] w-auto leading-[22px] text-grey text-body'>{descriptions}</p>
                <Button
                    title="See details"
                    icon={ArrowSvg}
                    textColor="#FFFFFF"
                    bgColor="#FF6D33"
                    className='border border-solid border-[#FF6D33] py-[6px] px-[15px] max-w-content hover:bg-[#FFE8DF] hover:text-[#FF6D33]'
                    link={testURL}
                />
            </article>
            <article className={`px-[16px] sm:space-y-[12px] space-y-[9px] ${isHovered ? '' : 'hidden'}`}>
                <h3 className='text-h3 line-clamp-1 text-[#FF6D33]'>{category}</h3>
                <p className='overflow-y-hidden h-[44px] w-auto leading-[22px] text-grey text-body'>A${price}</p>
                <Button
                    title="See details"
                    icon={ArrowSvg}
                    textColor="#FFFFFF"
                    bgColor="#FF6D33"
                    className='border border-solid border-[#FF6D33] py-[6px] px-[15px] max-w-content hover:bg-[#FFE8DF] hover:text-[#FF6D33]'
                    link={testURL}
                />
            </article>
        </section>
    );
};

export default PrimaryCard;