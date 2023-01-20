import stack_overflow_icon from "../stack_overflow_icon.png";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";
import LoginAndSignUp from "../molecules/LoginAndSignUpButton";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import React, { useState } from "react";
import LoggedIn from "../molecules/LoggedIn";
import { Navigate } from "react-router-dom";
import { LinkButton } from "../atoms/LinkButton";
import { SearchBar } from "../molecules/SearchBar";
import LogoTitle from "../molecules/LogoTitle";
import { GradientLine } from "../atoms/GradientLine";

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
    <div className="fixed z-50 w-full">
      <GradientLine />
      <div className="flex items-center justify-between bg-neutral-900 shadow-2xl">
        <div className="flex w-full items-center px-2">
          <LogoTitle />
          <SearchBar />
        </div>

        {user ? <LoggedIn user={user} setUser={setUser} /> : <LoginAndSignUp />}
      </div>
    </div>
  );
}
