import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginAndSignUp() {
  return (
    <div className="ml-24 mx-2 shadow-2xl flex w-full items-center gap-4 md:w-4/12">
    <Link
      to="/signin"
      className="my-3 w-full rounded bg-slate-700 py-1 text-white text-sm sm:w-4/12"
    >
      Log In
    </Link>

    <Link
      to="signUp"
      className="my-3 w-full rounded bg-blue-500 py-1 text-sm font-bold text-white hover:bg-indigo-700 sm:w-4/12"
    >
      Sign Up
    </Link>
  </div>
  )
}
