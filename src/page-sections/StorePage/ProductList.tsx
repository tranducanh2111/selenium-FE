import React, { useState, useEffect } from 'react';
import PrimaryCard from '@/components/PrimaryCard'
import productList from '@/dummy-data/productList.json'
import Button from '@/components/Buttons/Button';
import FilterIcon from '../../../public/filter.svg';
import Filter from '@/components/Filter';

const ProductList: React.FC = () => {
    const itemsPerPage = 30; // Number of items to load at each step
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(productList);
    const [sortBy, setSortBy] = useState('newest');

    // Function to open the filter
    const openFilter = () => {
        setFilterOpen(true);
    };

    // Function to close the filter
    const closeFilter = () => {
        setFilterOpen(false);
    };

    // Function to handle the scroll event and load more items when the user reaches the bottom
    const handleScroll = () => {
        if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        visibleItems < productList.length
        ) {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
        }
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to update the filtered products based on filter criteria
    const handleFilter = (filters : any) => {
        // Implement your filter logic here
        const updatedProducts = filterProducts(productList, filters);
        setFilteredProducts(updatedProducts);
        setFilterOpen(false); // Close the filter after applying filters
    };

    // Function to filter products based on the provided filters
    const filterProducts = (products : any, filters : any) => {
        return products.filter((product : any) => {
        if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
            return false;
        }
        if (filters.type.length > 0 && !filters.type.includes(product.type)) {
            return false;
        }
        if (filters.priceLow !== '' && parseFloat(filters.priceLow) > product.price) {
            return false;
        }
        if (filters.priceHigh !== '' && parseFloat(filters.priceHigh) < product.price) {
            return false;
        }
        return true;
        });
    };

    const sortProducts = (products : any, sortOption : any) => {
        const sortedProducts = [...products];
        switch (sortOption) {
          case 'newest':
            sortedProducts.sort((a, b) => b.index - a.index); // Sort by highest index to lowest
            break;
          case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name based on the first letter
            break;
          case 'priceLowHigh':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'priceHighLow':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          default:
            break;
        }
        setFilteredProducts(sortedProducts);
      };
      
      // Function to handle the sorting option change
      const handleSortByChange = (event : any) => {
        const newSortBy = event.target.value;
        setSortBy(newSortBy);
        sortProducts(filteredProducts, newSortBy); // Sort the filtered products
      };

    return (
    <>
        <div className='relative max-w-[1160px] mx-auto space-y-[24px]'>
            <div className="justify-center items-center flex flex-col gap-[24px] px-[20px]">
                <div className="w-full grid grid-cols-[auto,288px] gap-[4px] px-[20px]">
                    <div>
                        <div className="text-h2 font-bold text-[#000000]">Product</div>
                        <p>{filteredProducts.length} products available.</p>
                    </div>  
                    <div className='flex items-center'>
                        <label>Sort By:</label>
                        <select value={sortBy} onChange={handleSortByChange} className='outline-none'>
                            <option value="newest">Newest</option>
                            <option value="name">Name</option>
                            <option value="priceLowHigh">Price Low-High</option>
                            <option value="priceHighLow">Price High-Low</option>
                        </select>
                        <Button
                            title="Filter"
                            icon={FilterIcon}
                            textColor="#000000"
                            onClick={openFilter}
                            className='ml-[8px] py-[6px] px-[15px] hover:bg-[#FFE8DF] hover:text-[#FF6D33] border hover:border-solid hover:border-[#FF6D33]'
                        />
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center px-[20px]">
                <div className="max-w-[1160px] flex flex-col xl:items-start items-start lg:gap-[36px] sm:gap-[38.5px] gap-[38.5px] mb-[60px]">
                    <div className="max-w-[1160px] items-center">
                        <div className="max-w-full min-h-[303px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex justify-between gap-[53px]">
                        {filteredProducts.slice(0, visibleItems).map((item, index) => (
                            <PrimaryCard key={index} imageURL={item.image} name={item.name} descriptions={item.description} testURL="/" price={item.price} category={item.type}/>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Filter isFilterOpen={isFilterOpen} closeFilter={closeFilter} onFilter={handleFilter}/>
    </>
    )
}

export default ProductList
