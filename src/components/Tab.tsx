import React, { useRef } from 'react';
import Button from '@/components/Buttons/Button';
import PreviousArrowSvg from 'public/previous-arrow.svg';
import NextArrowSvg from 'public/next-arrow.svg';

const Tab = ({
    categories,
    selectedCategoryIndex = -1,
    setSelectedCategoryIndex,
}: {
    categories: any;
    selectedCategoryIndex: any;
    setSelectedCategoryIndex: any;
}) => {
    const filterButtonContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the filter button container

    // Function to navigate to the next category
    const handleNextCategory = () => {
        const nextIndex = (selectedCategoryIndex + 1) % categories.length;
        setSelectedCategoryIndex(nextIndex);
    };

    // Function to navigate to the previous category
    const handlePreviousCategory = () => {
        const previousIndex = (selectedCategoryIndex - 1 + categories.length) % categories.length;
        setSelectedCategoryIndex(previousIndex);
    };

    return (
        <div className={`w-full flex items-center mt-[5px] space-x-1 hide-scrollbar`}>
            {/* Button switch to the previous category */}
            <Button icon={PreviousArrowSvg} onClick={handlePreviousCategory} bgColor='#FF6D33' className='h-[36px] w-[46px] px-[15px] py-[6px] hover:bg-[#F4A261]'/>
            <div className={`overflow-x-auto whitespace-nowrap space-x-1 flex items-center hide-scrollbar`} ref={filterButtonContainerRef}>
                {/* Button that allows choosing every topic */}
                <Button
                    title="All"
                    textColor={`${selectedCategoryIndex === -1 ? '#FF4800' : '#000000'}`}
                    onClick={() => setSelectedCategoryIndex(-1)}
                    className={`h-[36px] px-[12px] text-sm max-w-content border border-solid hover:opacity-70 ${selectedCategoryIndex === -1 ? 'text-[#FF4800] bg-[#FFE8DF] border-[#FF4800]' : 'text-[#000000] border-[#000000] opacity-50'}`}
                />
                {/* Button for categories */}
                {categories.map((category : any, index : any) => (
                    <Button
                        key={category}
                        title={category}
                        onClick={() => setSelectedCategoryIndex(index)}
                        textColor={`${selectedCategoryIndex === index ? '#FF4800' : '#000000'}`}
                        className={`h-[36px] px-[12px] text-sm max-w-content border border-solid hover:opacity-70 ${selectedCategoryIndex === index ? 'text-[#FF4800] bg-[#FFE8DF] border-[#FF4800]' : 'text-[#000000] border-[#000000] opacity-50'}`}
                    />
                ))}
            </div>
            {/* Button switch to the next category */}
            <Button icon={NextArrowSvg} bgColor='#FF6D33' onClick={handleNextCategory} className='h-[36px] w-[46px] px-[15px] py-[6px] hover:bg-[#F4A261]' />
        </div>
    );
};

export default Tab;