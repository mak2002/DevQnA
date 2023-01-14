import React from "react";
import firebase from "firebase/compat/app";
import { MdLogout } from "react-icons/md";

export default function LoggedIn(props: { user: any; setUser: Function }) {
  return (
    <div className="flex w-full gap-10 my-4 mr-4 sm:relative sm:w-2/12">
      <p className="text-white">User: {props.user.email.slice(0,5)}</p>
      <button
        className=" text-white"
        onClick={async () => {
          await firebase.auth().signOut();
          props.setUser(null);
        }}
      >
        <MdLogout size={30} />
      </button>
    </div>
  );
}
