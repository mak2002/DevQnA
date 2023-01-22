import React, {
  ReactComponentElement,
  ReactFragment,
  ReactHTMLElement,
  useState,
} from "react";
import { questionForm } from "../../utils/Data";
import { putNewQuestions } from "../../utils/dataRequests";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import TinyMCE from "../atoms/TinyMCE";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { Heading } from "../atoms/Heading";
import AskQuestionForm from "../organisms/AskQuestionForm";
import { QuestionDetails } from "../../utils/Types";

export default function AskQuestion() {
  const [questionDetails, setQuestionDetails] = useState<QuestionDetails>({
    title: "",
    details: "",
    tags: [""],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setQuestionDetails({
      ...questionDetails,
      [name]: value,
    });
    console.log("questionDetails>>>>", questionDetails);
  };

  const setContent = (content: any) => {
    setQuestionDetails({
      ...questionDetails,
      details: content,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = firebase.auth().currentUser?.email;
    if (!email) {
      alert("Please login to ask a question");
      return;
    }
    console.log("questionDetails>>>>", questionDetails);
    putNewQuestions(questionDetails, email);
  };

  return (
    <React.Fragment>
      <div className="bg-stone-700 pl-5">
        <Heading
          text="Ask a public question"
          className="py-5 pl-5 text-left font-bold text-white"
        />

        <AskQuestionForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setContent={setContent}
        />
      </div>
    </React.Fragment>
  );
}
