import React, { useState } from 'react';

const Filter: React.FC<{ isFilterOpen: boolean, closeFilter: () => void, onFilter: (filters: any) => void }> = ({
  isFilterOpen,
  closeFilter,
  onFilter
}) => {
  // Define local state for filters
  const [localFilters, setLocalFilters] = useState<{
    brand: string[];
    type: string[];
    priceLow: string;
    priceHigh: string;
  }>({
    brand: [],
    type: [],
    priceLow: '',
    priceHigh: '',
  });

  const handleBrandChange = (brand: string) => {
    const updatedBrandFilters = [...localFilters.brand];
    if (updatedBrandFilters.includes(brand)) {
      updatedBrandFilters.splice(updatedBrandFilters.indexOf(brand), 1);
    } else {
      updatedBrandFilters.push(brand);
    }
    setLocalFilters({ ...localFilters, brand: updatedBrandFilters });
  };

  const handleTypeChange = (type: string) => {
    const updatedTypeFilters = [...localFilters.type];
    if (updatedTypeFilters.includes(type)) {
      updatedTypeFilters.splice(updatedTypeFilters.indexOf(type), 1);
    } else {
      updatedTypeFilters.push(type);
    }
    setLocalFilters({ ...localFilters, type: updatedTypeFilters });
  };

  const handlePriceLowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters({ ...localFilters, priceLow: event.target.value });
  };

  const handlePriceHighChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters({ ...localFilters, priceHigh: event.target.value });
  };

  const applyFilters = () => {
    onFilter(localFilters);
  };

  const clearFilters = () => {
    setLocalFilters({
      brand: [],
      type: [],
      priceLow: '',
      priceHigh: '',
    });
    onFilter({ brand: [], type: [], priceLow: '', priceHigh: '' }); // Clear filters and trigger filter function
  };

  return (
    <>
      <div
        className={`absolute inset-0 z-20 ${
          isFilterOpen ? 'sm:block bg-black opacity-80' : 'hidden'
        }`}
        onClick={closeFilter}></div>

      <div className={isFilterOpen ? 'grid grid-cols-2 absolute top-0 right-0 w-full sm:w-[350px] bg-[#ECECEC] p-[20px] sm:p-[30px] gap-[16px] z-20 sm:rounded-[12px] shadow-xl' : 'hidden'}>
        <div className='col-span-1 row-span-1 bg-[#FFFFFF] rounded-[8px] p-[12px] space-y-[12px]'>
          <h4 className='text-h4'>Brand</h4>
          <div>
            <div className='space-x-[6px]'>
                <input type='checkbox' id='puma' name='puma' value='Puma' onChange={() => handleBrandChange('Puma')} checked={localFilters.brand.includes('Puma')}/>
                <label htmlFor='puma'>Puma</label>
            </div>
            <div className='space-x-[6px]'>
                <input type='checkbox' id='nike' name='nike' value='Nike' onChange={() => handleBrandChange('Nike')} checked={localFilters.brand.includes('Nike')}/>
                <label htmlFor='nike'>Nike</label>
            </div>
            <div className='space-x-[6px]'>
                <input type='checkbox' id='adidas' name='adidas' value='Adidas' onChange={() => handleBrandChange('Adidas')} checked={localFilters.brand.includes('Adidas')}/>
                <label htmlFor='adidas'>Adidas</label>
            </div>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-[#FFFFFF] rounded-[8px] p-[12px] space-y-[12px]'>
          <h4 className='text-h4'>Type</h4>
          <div>
          <div className='space-x-[6px]'>
                <input
                  type='checkbox'
                  id='shoes'
                  name='shoes'
                  value='Shoes'
                  onChange={() => handleTypeChange('Shoes')}
                  checked={localFilters.type.includes('Shoes')}
                />
                <label htmlFor='shoes'>Shoes</label>
            </div>
            <div className='space-x-[6px]'>
                <input
                  type='checkbox'
                  id='clothes'
                  name='clothes'
                  value='Clothes'
                  onChange={() => handleTypeChange('Clothes')}
                  checked={localFilters.type.includes('Clothes')}
                />
                <label htmlFor='clothes'>Clothes</label>
            </div>
            <div className='space-x-[6px]'>
                <input
                type='checkbox'
                id='accessories'
                name='accessories'
                value='Accessories'
                onChange={() => handleTypeChange('Accessories')}
                checked={localFilters.type.includes('Accessories')}
                />
                <label htmlFor='accessories'>Accessories</label>
            </div>
          </div>
        </div>

        <div className='col-span-2 bg-[#FFFFFF] w-full rounded-[8px] p-[12px] space-y-[8px]'>
          <h4 className='text-h4'>Price Range</h4>
          <div className='flex justify-between gap-[8px]'>
            <input
              type='text'
              placeholder='Low'
              value={localFilters.priceLow}
              onChange={handlePriceLowChange}
              className='w-[48%] border border-solid hover:border-[#FFE8DF] focus:border-[#FF4800] outline-none rounded-[8px] py-[4px] px-[8px]'
            />
            <input
              type='text'
              placeholder='High'
              value={localFilters.priceHigh}
              onChange={handlePriceHighChange}
              className='w-[48%] border border-solid hover:border-[#FFE8DF] focus:border-[#FF4800] outline-none rounded-[8px] py-[4px] px-[8px]'
            />
          </div>
        </div>

        <button onClick={applyFilters} className='bg-[#FF5A1A] text-white text-h5 flex justify-center items-center rounded-[8px] py-2'>Apply Filters</button>
        <button onClick={clearFilters} className='text-underline text-[#FF5A1A] text-h5 flex justify-center items-center rounded-[8px] py-2'>Clear Filters</button>
      </div>
    </>
  );
};

export default Filter;
