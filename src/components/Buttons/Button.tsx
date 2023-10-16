import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  title?: string
  onClick?: () => void
  textColor?: string
  bgColor?: string
  icon?: StaticImageData
  className?: string
  classNameIcon?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  textColor,
  bgColor,
  icon,
  className,
  classNameIcon,
  disabled = false,
}: ButtonProps) => {

  const buttonClasses = `px-3 h-[36px] rounded-md transition duration-300 ease-in-out text-[${textColor}] bg-[${bgColor}] ${
    className || ''
  }`

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={title}
    >
      {icon ? (
        <span className='flex items-center'>
          <Image
            src={icon}
            alt="Logo"
            width={20}
            height={20}
            className={classNameIcon}
          />
          <span className='ml-1 max-w-content text-base'>{title}</span>
        </span>
      )
      :(
        title
      )}
    </button>
  )
}

export default Button