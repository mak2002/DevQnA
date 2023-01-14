import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../utils/firebaseFile";
import React, { ReactComponentElement, ReactElement, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import stack_overflow_icon from "../stack_overflow_icon.png";
import { loginInButtions } from "../utils/Data";
import firebase from "firebase/compat/app";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState<String>("");
  const [loginPassword, setLoginPassword] = useState<String>("");

  const renderLoginButtons = (): any => {
    return loginInButtions.map((button) => {
      return button.icon ? (
        <button className={button.className} onClick={button.onClick}>
          {button.icon}
          {button.content}
        </button>
      ) : (
        <button className={button.className} onClick={button.onClick}>
          {button.content}
        </button>
      );
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-neutral-800">
      {firebase.auth().currentUser && <Navigate to="/" replace={true} />}
      <Link to="/" className="">
        <img
          src={stack_overflow_icon}
          className="fill-white"
          alt="StackOverflow Icon"
          width={100}
        />
      </Link>

      {renderLoginButtons()}

      <div className="mt-6 flex w-3/4 flex-col justify-center rounded-lg bg-neutral-700 p-4 sm:w-1/4">
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
        <label htmlFor="email" className="pb-2 text-left text-white">
          Password
        </label>
        <input
          type="password"
          className="mb-2  bg-zinc-800 p-1 text-white outline transition-all hover:outline-4 hover:outline-blue-600"
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
