import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import ContactSection from '@/page-sections/ContactUs/ContactSection'
import MemberCard from '@/components/MemberCard'
import Heading from '@/components/Heading'
import ArticlesSection from '@/page-sections/HomePage/ArticlesSection'

const ContactPage: React.FC = () => {
  const [openCard, setOpenCard] = useState(1)

  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Adam Zucker',
      title: 'Brand Ambassador',
      desciption: [
        'Email: azucker@selenium.com.au',
        'Phone: 0466223855',
      ],
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    },
    {
      id: 2,
      name: 'Ms. Katherin Johanson',
      title: 'Marketing and Advertising Specialist',
      desciption: [
        'Email: kjohanson@selenium.com.au',
        'Phone: 0468523855',
      ],
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    },
    {
      id: 3,
      name: 'Mr. Selene Pham',
      title: 'Customer Service Representative',
      desciption: [
        'Email: spham@selenium.com.au',
        'Phone: 0461453855',
      ],
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    },
  ]

  const handleCardClick = (cardId: number) => {
    if (cardId === openCard) {
      setOpenCard(0)
    } else {
      setOpenCard(cardId)
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="bg-white space-y-[60px] pt-[40px] pb-[60px]">
      <div className="max-w-[1160px] flex lg:flex-row pb-[40px] flex-col justify-evenly gap-10 sm:mx-auto mx-5">
        <Heading
          title="Keep in touch with us!"
          description={`We love to hear from you! Whether you have a question, need assistance, or just want to say hello, we're here to help. If you prefer in-person assistance, visit our physical store. Our friendly staff will be delighted to help you find what you need.`}
          titleClassName="text-h2 font-bold pb-[10px]"
          className=""
          descriptionClassName="text-body"
        />

        <div className="flrx flex-col space-y-10 ">
          {teamMembers.map((member, index) => (
            <MemberCard
              id={member.id}
              key={index}
              name={member.name}
              title={member.title}
              description={member.desciption}
              image={member.image}
              isHidden={openCard === member.id}
              onToggle={() => handleCardClick(member.id)}
              cardClassName={`sm:w[50rem] md:w-[35rem] ${
                openCard !== member.id ? 'border shadow-none' : null
              }`}
            />
          ))}
        </div>
      </div>
      <ContactSection/>
      <ArticlesSection />
    </div>
    </Fragment>
  )
}

export default ContactPage