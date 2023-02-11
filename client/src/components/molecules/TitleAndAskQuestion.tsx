import React from "react";
import { LinkButton } from "../atoms/LinkButton";

export default function TitleAndAskQuestion({ title }: { title: string }) {
  return (
    <div className="mx-4 flex items-center justify-between pt-14 sm:items-start">
      <p className="text-xl text-white md:text-3xl">{title}</p>
      <LinkButton
        to={"/askquestion"}
        className="cursor-pointer rounded-sm bg-blue-500 py-2 px-2 text-center text-white sm:h-10"
      >
        Ask Question
      </LinkButton>
    </div>
  );
}
