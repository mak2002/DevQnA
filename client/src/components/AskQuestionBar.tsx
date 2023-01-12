import React, { useState } from "react";
import { Link } from "react-router-dom";
import Gun from "gun";
import { title } from "process";
import { default as Axios } from "axios";

export default function AskQuestion() {
  function putNewQuestions() {
    console.log("putNewQuestions", questionDetails, questionDetails.tags);
    Axios.post("/postQuestion", {
      title: questionDetails.title,
      content: questionDetails.details,
      authorId: "d7f1c709-4fea-4ab0-86a3-03bdfb357b49",
      postType: "QUESTION",
      tags: questionDetails.tags,
      userId: '9371f314-1c93-11ec-9621-0242ac130002'
    }).then((res) => {
      console.log("res", res);
    });
  }

  const initialValues = {
    title: "",
    details: "",
    details2: "",
    tags: [""],
  };

  const [questionDetails, setQuestionDetails] = useState(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    // console.log(">>>>>", name, value);
    setQuestionDetails({
      ...questionDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted::::::", questionDetails);
    putNewQuestions();
  };

  const details = [
    {
      title: "Title",
      description:
        'Be specific and imagine you"re asking a question to another person.',
      inputWidth: "h-10 w-full pl-2",
      name: "title",
    },
    {
      title: "What are the details of your problem?",
      description:
        "Introduce the problem and expand on what you put in the title. Minimum 20 characters.",
      inputWidth: "h-40 w-full",
      name: "details",
    },
    {
      title: "What did you try and what were you expecting?",
      description:
        "Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.",
      inputWidth: "h-20 w-full pl-2",
      name: "details2",
    },
    {
      title: "Tags",
      description: "Add up to 5 tags to describe what your question is about.",
      inputWidth: "h-10 w-full pl-2",
      name: "tags",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-stone-700 pl-5">
        <h1 className="py-5 pl-5 text-left text-2xl font-bold text-white">
          Ask a public question
        </h1>

        {details.map((item) => {
          return (
            <div className="m-5 flex w-4/6 flex-col items-start justify-start bg-zinc-800 p-6">
              <h3 className="text-start text-xl text-white">{item.title}</h3>
              <p className="text-start text-sm text-white">
                {item.description}
              </p>
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
        })}
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
