import React, { useEffect } from "react";
import Rightbar from "./Rightbar";
import { Link } from "react-router-dom";

export default function Home() {
  const sortingButtons = ["Bountied", "Hot", "Week", "Month"];
  const [questions, setQuestions] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {};

    fetchQuestions();
  }, []);

  const renderSortingButtons = () => {
    return sortingButtons.map((buttonName) => {
      return (
        <button
          key={buttonName}
          className="border-collapse border border-gray-400 p-3 text-white transition-all duration-100 hover:bg-slate-600"
        >
          {buttonName}
        </button>
      );
    });
  };

  function showQuestions(): any {
    console.log("all questions", questions);

    return questions.map((question) => {
      console.log("question", question.title);
      if (question !== null && question.title !== undefined) {
        return (
          <div className="flex flex-col items-start border-b-2 border-gray-500 bg-gray-800 py-6">
            <div className="flex w-full content-start gap-4 px-4 text-right text-white md:flex-col ">
              <span>{"2 vote"}</span>
              <span>{"2 answers"}</span>
              <span>{"2 views"}</span>
            </div>
            <Link
              className="break-normal px-4 text-left text-blue-400"
              to={`/questions/${question.id}`}
              id={question.id}
            >
              {question.title}
            </Link>
          </div>
        );
      }
    });
  }

  return (
    <React.Fragment>
      <div className="h-screen w-full bg-neutral-800 sm:w-7/12">
        <div className="mx-4 flex items-center justify-between pt-4 sm:items-start">
          <p className="text-xl text-white md:text-3xl">Top Questions</p>
          <Link
            to={"/askquestion"}
            className="cursor-pointer rounded-sm bg-blue-500 py-2 px-2 text-center text-white sm:h-10"
          >
            Ask Question
          </Link>
        </div>

        <div className="relative mx-4 mt-6 mb-4 flex justify-end">
          {renderSortingButtons()}
        </div>

        <div>{showQuestions()}</div>
      </div>
      <Rightbar />
    </React.Fragment>
  );
}
