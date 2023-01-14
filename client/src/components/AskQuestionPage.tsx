import React, {
  ReactComponentElement,
  ReactFragment,
  ReactHTMLElement,
  useState,
} from "react";
import { questionForm } from "../utils/Data";
import { putNewQuestions } from "../utils/dataRequests";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export type QuestionDetails = {
  title: string;
  details: string;
  details2: string;
  tags: string[];
};

export default function AskQuestion() {
  const initialValues = {
    title: "",
    details: "",
    details2: "",
    tags: [""],
  };

  const [questionDetails, setQuestionDetails] =
    useState<QuestionDetails>(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setQuestionDetails({
      ...questionDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = firebase.auth().currentUser?.email;
    if (!email) {
      alert("Please login to ask a question");
      return;
    }
    putNewQuestions(questionDetails, email);
  };

  const renderQuestionForm = (): any => {
    return questionForm.map((item) => {
      return (
        <div className="m-5 flex w-4/6 flex-col items-start justify-start bg-zinc-800 p-6">
          <h3 className="text-start text-xl text-white">{item.title}</h3>
          <p className="text-start text-sm text-white">{item.description}</p>
          <input
            type="text"
            placeholder={item.title}
            className={`${item.inputWidth} my-3 resize-none bg-zinc-700 text-white`}
            onChange={handleInputChange}
            name={item.name}
            key={item.name}
          />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="bg-stone-700 pl-5">
        <h1 className="py-5 pl-5 text-left text-2xl font-bold text-white">
          Ask a public question
        </h1>

        {renderQuestionForm()}
        <button
          type="submit"
          onClick={handleSubmit}
          className="my-2 rounded-md bg-blue-500 py-2 px-2 "
        >
          Submit Question
        </button>
      </div>
    </React.Fragment>
  );
}
