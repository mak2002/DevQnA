import React from "react";
import { timeAgo } from "../../utils/generalUtils";
import { LinkButton } from "../atoms/LinkButton";

function renderQuestions(questions: any): any {
  return questions.map((question: any) => {
    console.log("question", question.title);
    if (question?.title) {
      return (
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
          <div className="flex justify-end">
            <a href="" className="text-blue-700">
              {question.userEmail.slice(0, 5)}
              &nbsp;
            </a>
            <span className="mr-2 text-right text-white ">
              {"asked " + timeAgo(new Date(question["createdAt"]))}
            </span>
          </div>
        </div>
      );
    }
  });
}

export default function AllQuestions({ questions }: any) {
  return <div>{renderQuestions(questions)}</div>;
}
