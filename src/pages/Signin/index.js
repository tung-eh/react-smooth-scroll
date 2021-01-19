import React from 'react'

import Logo from '../../components/Logo'

const Input = ({ label, icon, ...props }) => (
  <div className="relative flex flex-col mb-6">
    <label className="text-sm mb-1" htmlFor={props.id}>
      {label}
    </label>
    <input
      className="bg-white rounded-sm outline-none text-black py-2 px-3"
      {...props}
    />
  </div>
)

const Signin = () => (
  <div className="flex flex-col items-center w-full min-h-screen bg-green-600 text-white">
    <div className="flex items-center w-full max-w-screen-xl h-20 md:h-24 px-8">
      <Logo />
    </div>
    <form className="flex-1 grid place-items-center w-full max-w-screen-xl px-8">
      <div className="flex flex-col flex flex-col rounded-md bg-gray-900 w-full max-w-lg px-8 py-16">
        <h1 className="font-bold text-lg text-center mb-8">
          Sign in to your account
        </h1>
        <Input type="email" label="Email" id="email" required />
        <Input type="password" label="Password" id="password" required />
        <button className="rounded-sm bg-green-500 hover:bg-green-600 p-2 my-2">
          Continue
        </button>
        <button className="self-center text-sm hover:underline" type="button">
          Forgot password
        </button>
      </div>
    </form>
  </div>
)

export default Signin
