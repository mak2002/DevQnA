import React from "react";
import { Heading } from "../atoms/Heading";

export default function Rightbar() {
  return (
    <div className="hidden border-l-2 bg-neutral-800 sm:w-4/12 pt-10 md:block">
      <div className="justify-center md:flex">
        {/* <Heading
          type="h4"
          text={"The Overflow Blog"}
          className={"bg-stone-500"}
        /> */}
        <p>The Overflow blog</p>
      </div>
    </div>
  );
}
