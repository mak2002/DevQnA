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

// import "../App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-neutral-800">
      <Link to="/" className="">
        <img
          src={stack_overflow_icon}
          className="fill-white"
          alt="StackOverflow Icon"
          width={50}
        />
      </Link>

      <button className="mt-4 w-3/4 rounded bg-slate-600 py-2 ">
        Log in with Google
      </button>
      <button className="mt-4 w-3/4 rounded bg-slate-400 py-2">
        Log in with GitHub
      </button>
      <button className="mt-4 w-3/4 rounded bg-slate-400 py-2">
        Log in with Facebook
      </button>

      {/* <div className="mt-2 flex w-3/4 flex-col gap-4 bg-slate-800 py-16 text-white"> */}
      <div className="mt-8 flex w-3/4 flex-col justify-center bg-red-500 p-4">
        <label htmlFor="email" className="pb-2 text-left text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email..."
          className="mb-2 p-1 text-black outline transition-all hover:outline-4 hover:outline-blue-600"
          name="email"
        ></input>
        <label htmlFor="email" className="pb-2 text-left text-white">
          Password
        </label>
        <input
          type="password"
          className="mb-2 p-1 text-black outline transition-all hover:outline-4 hover:outline-blue-600"
          name="password"
        ></input>
        <button>Log in</button>
      </div>
      {/* </div> */}

      <p className="text-white">Don't have an account?</p>
      <Link to="/signup">
        <a className="text-blue-600 underline">Sign up</a>
      </Link>
    </div>
  );
};

export default Login;
