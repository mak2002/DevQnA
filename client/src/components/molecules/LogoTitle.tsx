import React from "react";
import { MdMenu } from "react-icons/md";
import { LinkButton } from "../atoms/LinkButton";
import stack_overflow_icon from "../../stack_overflow_icon.png";

export default function LogoTitle() {
  return (
    <>
      <MdMenu size={30} className="text-white sm:hidden" />

      <LinkButton to="/" className="flex items-center">
        <img
          src={stack_overflow_icon}
          className="fill-white text-white grayscale"
          alt="StackOverflow Icon"
          width={50}
        />
        <p className="text-md hidden text-white sm:block">clone&nbsp;</p>
        <b className="hidden text-white sm:block">overflow</b>
      </LinkButton>
    </>
  );
}
