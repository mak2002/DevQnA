import React from "react";
import { timeAgo } from "../../utils/generalUtils";
import { getAvatarUrl } from "../../utils/User";
import { LinkButton } from "../atoms/LinkButton";

export default function HomePageQuestion(question: any) {

  const email = question.userEmail;
  return (
    <div>
      <div className="flex flex-col border-b-2 border-gray-500 bg-gray-800 py-6">
        <div className="flex w-full content-start gap-4 px-4 text-right text-white md:flex-col ">
          <span>{question.upvotes - question.downvotes + " votes"}</span>
          <span>2 answers</span> 
          {/* <span>{question['answers']}</span> */}
          <span>{"2 views"}</span>
        </div>
        <LinkButton
          className="break-normal px-4 text-left text-blue-400"
          to={`/questions/${question.id}`}
          id={question.id}
        >
          {question.title}
        </LinkButton>
        <div className="flex items-center justify-end gap-2">
          <img
            className="h-10 w-10 rounded-md"
            src={getAvatarUrl(email)}
            alt="user profile"
          />
          <a href="" className="text-blue-700">
            {email?.slice(0, 5) || "user"}
            &nbsp;
          </a>

          <span className="mr-2 text-right text-white ">
            {"asked " + timeAgo(new Date(question["createdAt"]))}
          </span>
        </div>
      </div>
    </div>
  );
}
