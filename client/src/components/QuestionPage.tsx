import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function QuestionsPage() {
  const { id }: any = useParams();
  const [postDetails, setPostDetails]: any = React.useState({});
  const [answer, setAnswer] = React.useState<string>("");
  const [givenAnswers, setGivenAnswers] = React.useState<string[]>([]);

  const [newAnswers, setNewAnswers] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const postData = await fetch(`http://localhost:3000/posts/${id}`);
      const postJSON = await postData.json();
      console.log("postJSON", postJSON);
      setPostDetails(postJSON);
    };

    fetchSinglePost();
  }, []);

  const showUserAnswers = (): any => {};

  const submitAnswer = () => {
    // var todos = Gun().get("todos");

    // todos.get(id).on(function (data, key) {
    if (answer === "") return;

    var currentAnswers = Gun().get("todos").get(id).put("answers");
    currentAnswers.set({ ans: answer });
    console.log("current answer submitAnswer", answer);

    currentAnswers.map().once(function (currAns, id) {
      if (currAns.ans !== undefined) {
        console.log("updated currentAnswers>>", currAns["ans"]);
      }
    });

    setGivenAnswers([...givenAnswers, answer]);
    console.log("given answers", givenAnswers);
  };

  return (
    <div className="h-screen bg-neutral-800 text-white">
      <div className="flex justify-end p-4">
        <Link
          to={"/askquestion"}
          className="cursor-pointer rounded-sm bg-blue-500 py-2 px-2 text-center text-white sm:h-10"
        >
          Ask Question
        </Link>
      </div>

      <div>
        <h1 className="no-wrap pb-2 px-4 text-start text-xl">
          {postDetails["title"]}
        </h1>
        <hr />

        <p>{postDetails["description"]}</p>

        <div>{showUserAnswers()}</div>

        <hr />
        <div className="p-4">
          <h3 className="pb-2 text-left">Your Answer</h3>
          <textarea
            className="box-border w-full border-2 border-gray-500 bg-neutral-800 text-white"
            rows={5}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
      </div>

      <button
        className="relative right-20 cursor-pointer  rounded-sm bg-blue-300 py-2 px-2 text-center text-white sm:h-10"
        onClick={() => submitAnswer()}
      >
        Post your answer
      </button>
    </div>
  );
}
