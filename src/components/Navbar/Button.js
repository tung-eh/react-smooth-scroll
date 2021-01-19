import React from 'react'

const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-full transition-colors duration-500 bg-green-500 hover:bg-white text-gray-900 text-sm py-3 px-10 ${className}`}
    {...props}
  />
)

export default Button
