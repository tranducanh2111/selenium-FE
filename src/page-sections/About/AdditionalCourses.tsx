import React from 'react'
import BookTest from 'public/Test.png'
import CambridgeIelts16 from 'public/cambridge16.png'
import CambridgeIelts17 from 'public/cambridge17.png'
import PrimaryCard from '@/components/PrimaryCard'
const AdditionalCourses = () => {
  const tests = [
    {
      "productType": "Shoes",
      "imageURL": "/nike_shoes.jpg",
      "name": "Nike Air Max 2023",
      "descriptions": "The latest Nike Air Max shoes with advanced cushioning technology for ultimate comfort.",
      "productURL": "",
"price": 200.00
    },
    {
      "productType": "Shirt",
      "imageURL": "/nike_track_jacket.jpg",
      "name": "Nike Dri-FIT Men's T-Shirt",
      "descriptions": "Stay cool and comfortable in this moisture-wicking Nike Dri-FIT shirt.",
      "productURL": "",
"price": 495.00
    },
    {
      "productType": "Hoodie",
      "imageURL": "/nike_gym_duffle.jpg",
      "name": "Nike Tech Gym",
      "descriptions": "A stylish and warm hoodie for those chilly days.",
      "productURL": "",
"price": 495.00
    },
  ]

  return (
    <div className="xl:w-[1070px] m-auto hidden sm:block" style={{marginBottom:"40px",marginTop:"40px"}}>
      <div className="mx-[20px] xl:mx-0 mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
          {tests.map((test, index) => (
            <PrimaryCard
						key={index}
						imageURL={test.imageURL}
						name={test.name}
						descriptions={test.descriptions}
						testURL={test.productURL}
						price={test.price}
						category={test.productType}
					/>
          ))}
        </div>
    </div>
  )
}

export default AdditionalCourses
