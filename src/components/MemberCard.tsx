import React from 'react'
import Avatar from '@material-tailwind/react/components/Avatar'
import Card from '@material-tailwind/react/components/Card'
import IconButton from '@material-tailwind/react/components/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface MemberCardProps {
  id: number
  name: string
  title: string
  description: string[]
  onToggle: any
  isHidden: boolean
  image: string
  cardClassName?: string | null
}

const MemberCard = ({
  id,
  name,
  title,
  description,
  onToggle,
  isHidden,
  image,
  cardClassName,
}: MemberCardProps) => {
  return (
    <Card
      key={id}
      className={`flex flex-row w-full sm:w-[30rem] p-7 gap-10 justify-start ${
        isHidden && 'bg-[#FF6D33]'
      } ${
        cardClassName ? cardClassName : ''
      } duration-100 transition ease-out mb-6`}>
      <Avatar
        size="xl"
        variant="circular"
        alt={name}
        src={image}
        className="border-2 border-white"
      />
      <div className={`w-[70%] ${isHidden && 'text-white'} self-center `}>
        <div>
          <p className={`text-h3 ${!isHidden ? 'text-black' : 'text-white'}`}>
            {name}
          </p>
          <p
            className={`text-body ${
              !isHidden ? 'text-light-grey' : 'text-white'
            }`}>
            {title}
          </p>
        </div>
        {isHidden && (
          <ul className="list-inside list-disc mt-4">
            {description.map((des, index) => (
              <li key={index} className="hidden-section text-white ml-4">
                {des}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="text-primary w-10 absolute right-5">
        <IconButton
          variant="text"
          className="rounded-full duration-100 transition ease-out sm:ml-4"
          onClick={onToggle}>
          {isHidden ? (
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ color: '#fff' }}
              size="xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: '#000' }}
              size="xl"
            />
          )}
        </IconButton>
      </div>
    </Card>
  )
}

export default MemberCard