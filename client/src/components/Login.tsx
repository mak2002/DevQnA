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

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <button className="mt-3 flex w-3/4 items-center justify-center gap-2 rounded bg-slate-600 py-2 text-white sm:w-1/4">
        <FcGoogle />
        Log in with Google
      </button>
      <button className="mt-4 flex w-3/4 items-center justify-center gap-2 rounded bg-slate-400 py-2 text-white sm:w-1/4">
        <FaGithub />
        Log in with GitHub
      </button>
      <button className="mt-4 flex w-3/4 items-center justify-center gap-2 rounded bg-blue-800 py-2 text-white sm:w-1/4">
        <GrFacebook />
        Log in with Facebook
      </button>

      <div className="mt-6 flex w-3/4 flex-col justify-center rounded-lg bg-neutral-700 p-4 sm:w-1/4">
        <label htmlFor="email" className="pb-2 text-left text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email..."
          className="mb-2 bg-zinc-800 p-1 text-black outline transition-all hover:outline-4 hover:outline-blue-600"
          name="email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="email" className="pb-2 text-left text-white">
          Password
        </label>
        <input
          type="password"
          className="mb-2 bg-zinc-800 p-1 text-black outline transition-all hover:outline-4 hover:outline-blue-600"
          name="password"
          placeholder="Enter Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        ></input>
        <button
          className="mt-2 w-full bg-blue-600 py-2"
          onClick={() => {
            signInWithEmailAndPassword(loginEmail, loginPassword);
          }}
        >
          Log in
        </button>
      </div>

      <div className="mt-2 flex gap-2">
        <p className="text-white">Don't have an account? </p>
        <Link to="/signup">
          <a className="text-blue-600 underline">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
