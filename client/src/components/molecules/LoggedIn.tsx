import React from "react";
import firebase from "firebase/compat/app";
import { MdLogout } from "react-icons/md";
import Button from "../atoms/Button";
import { getAvatarUrl } from "../../utils/User";

export default function LoggedIn(props: { user: any; setUser: Function }) {
  const email = firebase.auth().currentUser?.email;
  if (!email) return null;
  const avatarUrl = getAvatarUrl(email);
  return (
    <div className="my-4 mr-4 flex w-full gap-10 sm:relative sm:w-2/12">
      <img
        className="h-8 w-8 rounded-md"
        src={avatarUrl}
        alt="user profile"
      />

      <Button
        className=" text-white"
        onClick={async () => {
          await firebase.auth().signOut();
          props.setUser(null);
        }}
      >
        <MdLogout size={42} />
      </Button>
    </div>
  );
}
