import React, { ReactComponentElement } from "react";
import { Link } from "react-router-dom";
import { LinkButton } from "../atoms/LinkButton";

export default function LoginAndSignUp(): ReactComponentElement<any> {
  return (
    <div className="mx-2 ml-24 flex items-center gap-4 py-3 shadow-2xl md:w-4/12">
      <LinkButton
        to="/signin"
        className=" w-full rounded bg-slate-700 py-1 px-5 text-sm text-white sm:w-4/12"
      >
        Log In
      </LinkButton>

      <LinkButton
        to="signUp"
        className="w-full rounded bg-blue-500 py-1 px-5 text-sm font-bold text-white hover:bg-indigo-700 sm:w-4/12"
      >
        Sign Up
      </LinkButton>
    </div>
  );
}
