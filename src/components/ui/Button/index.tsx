import React from 'react'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = 'button',
}) => {
  const buttonClass = className
    ? className
    : 'bg-[#e8e5c3] p-4 rounded-md text-black font-bold'

  return (
    <button onClick={onClick} type={type} className={buttonClass}>
      {children}
    </button>
  )
}
