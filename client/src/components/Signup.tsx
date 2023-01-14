import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../utils/firebaseFile";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import stack_overflow_icon from "../stack_overflow_icon.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const Signup = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-neutral-800">
      <Link to="/" className="">
        <img
          src={stack_overflow_icon}
          className="fill-white"
          alt="StackOverflow Icon"
          width={100}
        />
      </Link>

      <div className="mt-6 flex h-2/4 w-3/4 flex-col justify-center gap-10 rounded-lg bg-neutral-700 p-4 sm:w-1/4">
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 text-left text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email..."
            className="mb-2 bg-zinc-800 p-1 text-white outline transition-all hover:outline-4 hover:outline-blue-600"
            name="email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 text-left text-white">
            Password
          </label>
          <input
            type="password"
            className="mb-2 bg-zinc-800 p-1 text-white outline transition-all hover:outline-4 hover:outline-blue-600"
            name="password"
            placeholder="Enter Password..."
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="mt-2 w-full bg-blue-600 py-2"
          onClick={() => {
            registerWithEmailAndPassword(loginEmail, loginPassword);
          }}
        >
          Sign Up
        </button>
      </div>

      <div className="mt-2 flex gap-2">
        <p className="text-white">Already have an account? </p>
        <Link to="/signin">
          <a className="text-blue-600 underline">Sign in</a>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
