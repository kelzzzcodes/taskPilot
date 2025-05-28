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
  className = '',
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-[#e8e5c3] p-4 rounded-md text-black font-bold"
    >
      {children}
    </button>
  )
}
