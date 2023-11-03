import React from 'react'
import img1 from 'public/test1.png'
import img2 from 'public/test2.png'
import img3 from 'public/test3.png'
import Button from '@/components/Buttons/Button'
import SectionHeader from '@/components/SectionHeader'
import { BlockItem } from '@/components/BlockItem'
import ArrowRight from 'public/arrow-right.svg'

const BlockSection = () => {
  const blocks = [
    {
      img: img1,
      recColor: 'bg-[#E76F51]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'odd',
    },
    {
      img: img2,
      recColor: 'bg-[#2A9D8F]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'even',
    },
    {
      img: img3,
      recColor: 'bg-[#E9C46A]',
      name: 'Nguyen Van A',
      text: {
        line1:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
      },
      order: 'odd',
    },
  ]

  return (
    <div>
      <div className="max-w-[1070px] mx-auto flex flex-col xs:flex-row items-center justify-between">
        <SectionHeader 
            headingText={'Introducing Selenium crew!'}
            paragraphText={''}
            viewMoreLink={'/'}
            showFilterBar={false}
        />
      </div>

      <div className="max-w-[791px] flex flex-col mx-auto mt-10 sm:mt-[50px] gap-4 sm:gap-10">
        {blocks.map((block, index) => (
          <BlockItem
            key={index}
            img={block.img}
            recColor={block.recColor}
            name={block.name}
            text={block.text}
            order={index % 2 === 0 ? 'odd' : 'even'}
          />
        ))}
      </div>
    </div>
  )
}

export default BlockSection