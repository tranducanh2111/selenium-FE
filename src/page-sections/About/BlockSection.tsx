import React from 'react'
import img1 from 'public/test1.png'
import img2 from 'public/test2.png'
import img3 from 'public/test3.png'
import Button from '@/components/Buttons/Button'
import SectionHeader from '@/components/SectionHeader'
import { BlockItem } from '@/components/BlockItem'

const BlockSection = () => {
  const blocks = [
    {
      img: img1,
      recColor: 'bg-[#E76F51]',
      name: 'Serena Silvana',
      text: {
        line1:
          'Founder',
        line2:
          'Established Selenium, responsible for our overall strategy, direction, and initial development.',
        line3:
          '"The only way to do great work is to love what you do."',
      },
      order: 'odd',
    },
    {
      img: img2,
      recColor: 'bg-[#2A9D8F]',
      name: 'Aaron Tran',
      text: {
        line1:
          'Role: Chief Technology Officer',
        line2:
          "Technology expert and strategist, implement technology solutions and ensuring they align with the Selenium goals.",
        line3:
          '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
      },
      order: 'even',
    },
    {
      img: img3,
      recColor: 'bg-[#E9C46A]',
      name: 'Selene Pham',
      text: {
        line1:
          'Role: Head of Design',
        line2:
          'IELTS 8.5 overall (Listening 8.5 Reading 9.0 Writing 7.5 Speaking 8.0) - hoàn toàn tự học',
        line3:
          '"Logic will get you from A to B. Imagination will take you everywhere."',
      },
      order: 'odd',
    },
  ]

  return (
    <div>
      <div className="max-w-[1070px] mx-auto flex flex-col xs:flex-row items-center justify-between">
        <SectionHeader 
            headingText={'Introducing Selenium crew!'}
            paragraphText={"Selenium was founded by a group of sports enthusiasts who share a deep passion for athletics. We are dedicated to fostering a community of like-minded individuals who are committed to leading active and healthy lifestyles. Our team believes in the power of sports to bring people together and inspire them to be their best."}
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