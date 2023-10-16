import React from 'react';
import Tab from "@/components/Tab";
import Button from '@/components/Buttons/Button';
import ThinArrow from "public/thin-arrow.svg"

// Define the type for individual test data
type TestData = {
    productType: string;
    imageURL: string;
    name: string;
    descriptions: string;
    productURL: string;
};

// Define the type for the test overview data
type TestOverview = {
    [key: string]: TestData[];
};

type BaseHeadingSectionProps = {
    headingText: string; // Prop for the heading text
    paragraphText: string; // Prop for the paragraph text
    viewMoreLink: string; // Prop for the View More link URL
};

type WithFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: true; // Indicate that FilterBar is required
    categories: string[];
    selectedCategoryIndex: number;
    setSelectedCategoryIndex: any;
    setFilteredData: any;
    inputData: TestOverview;
};

type WithoutFilterBarProps = BaseHeadingSectionProps & {
    showFilterBar: false; // Indicate that FilterBar is not required
    categories?: string[];
    selectedCategoryIndex?: number;
    setSelectedCategoryIndex?: any;
    setFilteredData?: any;
    inputData?: TestOverview;
};

type HeadingSectionProps = WithFilterBarProps | WithoutFilterBarProps;

// Define the HeadingSection component
const HeadingSection = ({
    headingText,
    paragraphText,
    viewMoreLink,
    showFilterBar,
    categories,
    selectedCategoryIndex,
    setSelectedCategoryIndex,
}: HeadingSectionProps) => {
    return (
        <div className="mb-[24px] w-full flex flex-col sm:flex-row justify-between items-center space-y-[12px] sm:space-y-0">
            <div className='w-full sm:max-w-[532px] space-y-[12px]'>
                <h2 className="text-h2 mb-[4px] max-w-[418px] font-bold">{headingText}</h2>
                <p className="text-body text-grey line-[22px] max-w-[532px]">
                    {paragraphText}
                </p>
                {/* Conditionally render FilterBar */}
                {showFilterBar && (
                    <Tab
                        categories={categories}
                        selectedCategoryIndex={selectedCategoryIndex}
                        setSelectedCategoryIndex={setSelectedCategoryIndex}
                    />
                )}
            </div>
            {/* View More button */}
            <a href={viewMoreLink} className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto">
                <Button className='font-medium text-[#FF6D33]' icon={ThinArrow} title='View more'/>
            </a>
        </div>
    );
};

export default HeadingSection;