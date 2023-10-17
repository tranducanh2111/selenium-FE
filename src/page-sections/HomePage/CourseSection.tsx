import React, { useState, useEffect } from 'react';
import testOverviewData from '@/dummy-data/testOverview.json';
import HeadingSection from '@/components/SectionHeader';
import PrimaryCard from "@/components/PrimaryCard";

type TestData = {
    imageURL: string;
    name: string;
    descriptions: string;
    productURL: string;
};

const FilteredListPanel = ({sectionName, description, viewMoreLink, showFilter} : {sectionName : string, description : string, viewMoreLink : string, showFilter : boolean}) => {
    const testOverview: any = testOverviewData;
    const categories = Object.keys(testOverview);

    // Pagination variables
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    // Filter variables
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [filteredData, setFilteredData] = useState<TestData[]>([]);
	

	// Calculate the range of items to display on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToShow = filteredData.slice(startIndex, endIndex);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	// Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

	useEffect(() => {
		// Initialize filtered data when the component mounts
		const selectedCategory = categories[selectedCategoryIndex];
		const filteredPeople = selectedCategory
		? testOverview[selectedCategory]
		: Object.values(testOverview).flat();
		setFilteredData(filteredPeople);
	}, [selectedCategoryIndex, categories]);

	return (
    <section>
		<main className="flex flex-col justify-center p-[20px] sm:p-0">
				{/* Heading Section */}
				<HeadingSection
					categories={categories}
					inputData={testOverview}
					selectedCategoryIndex={selectedCategoryIndex}
					setSelectedCategoryIndex={setSelectedCategoryIndex}
					setFilteredData={setFilteredData}
					headingText={sectionName}
					paragraphText={description}
					viewMoreLink={viewMoreLink}
					showFilterBar={showFilter}
				/>
				<div className="pagination-bar hidden">
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i + 1}
						className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
						onClick={() => handlePageChange(i + 1)}
					>
					{i + 1}
					</button>
				))}
				</div>
		</main>
		<div className='w-full h-[480px] overflow-x-auto hide-scrollbar'>
			<div className="flex justify-between sm:w-full w-[200vw] min-w-[1000px]">
			{/* <div className="w-full min-w-[820px]"> */}
				{itemsToShow.map((test, index) => (
					<PrimaryCard
						key={index}
						imageURL={test.imageURL}
						name={test.name}
						descriptions={test.descriptions}
						testURL={test.productURL}
					/>
				))}
			</div>
		</div>
  	</section>
	);
};

export default FilteredListPanel;