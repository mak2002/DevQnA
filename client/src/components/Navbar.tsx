import stack_overflow_icon from "../stack_overflow_icon.png";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";
import LoginAndSignUp from "./LoginAndSignUpButton";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import React, { useState } from "react";
import LoggedIn from "./LoggedIn";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState<any>();
  const redir = () => {
    <Navigate to="/" />;
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      setUser(user);
      console.log("email", email);
    }
  });

  redir();

  return (
    <>
      <div className="fixed h-1 w-full bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700">
        &nbsp;
      </div>
      <div className="flex items-center justify-between bg-neutral-900 shadow-2xl">
        <div className="flex w-full items-center px-2">
          <MdMenu size={30} className="text-white sm:hidden" />

          <Link to="/" className="flex items-center">
            <img
              src={stack_overflow_icon}
              className="fill-white"
              alt="StackOverflow Icon"
              width={50}
            />
            <p className="text-md hidden text-white sm:block">clone&nbsp;</p>
            <b className="hidden text-white sm:block">overflow</b>
          </Link>

          <FaSearch
            size={20}
            className="relative left-6 hidden text-white sm:block"
          />
          <input
            type="text"
            className="hidden w-4/6 rounded-sm bg-stone-700 px-8 text-white sm:block"
            placeholder="Paste here :)"
          />
        </div>

        {user ? <LoggedIn user={user} setUser={setUser} /> : <LoginAndSignUp />}
      </div>
    </>
  );
}
