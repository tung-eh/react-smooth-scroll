import React from 'react'

const Button = ({ className, variant = 'primary', ...props }) => {
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-white text-black',
    dark: 'bg-black hover:bg-green-500 text-white',
  }[variant]

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full transition-colors duration-500 text-sm py-3 px-10 ${variantClasses} ${className}`}
      {...props}
    />
  )
}

export default Button
