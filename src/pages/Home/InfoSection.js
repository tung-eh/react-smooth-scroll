import React from 'react'

const InfoSection = ({
  id,
  darkTheme,
  image,
  imageFirst,
  topline,
  headline,
  description,
  children,
}) => {
  return (
    <div
      id={id}
      className={`grid place-items-center min-h-screen w-full ${
        darkTheme ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div class="grid md:grid-cols-2 gap-10 items-center max-w-screen-xl p-8">
        {imageFirst && <img src={image} alt="info" />}
        <div>
          <h2 className="md:text-lg font-bold text-green-500 uppercase mb-4">
            {topline}
          </h2>
          <h1 className="max-w-lg font-bold text-3xl md:text-5xl mb-8">
            {headline}
          </h1>
          <p className="max-w-lg md:text-xl mb-8">{description}</p>
          {children}
        </div>
        {!imageFirst && <img src={image} alt="info" />}
      </div>
    </div>
  )
}

export default InfoSection
