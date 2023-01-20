import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { isJSDocFunctionType } from "typescript";
import { fetchSinglePost } from "../../utils/dataRequests";
import Rightbar from "../organisms/Rightbar";
import TinyMCE from "../atoms/TinyMCE";
import rehypeRaw from "rehype-raw";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";

export default function QuestionsPage() {
  const { id }: any = useParams();
  const [postDetails, setPostDetails]: any = React.useState({});
  const [answer, setAnswer] = React.useState<string>("");
  const [givenAnswers, setGivenAnswers] = React.useState<string[]>([]);
  const [newAnswers, setNewAnswers] = React.useState<string[]>([]);

  useEffect(() => {
    fetchSinglePost(id, setPostDetails);
  }, []);

  const showUserAnswers = (): any => {};

  const submitAnswer = () => {};

  return (
    <div className="flex min-h-screen w-full bg-neutral-800 text-white ">
      <div className=" w-full  sm:w-8/12">
        <div className="flex justify-end p-4"></div>

        <div className="prose">
          <Heading
            type="h2"
            className="m-0 p-0 pl-2 text-left text-white"
            text={postDetails["title"]}
          />
          <ReactMarkdown
            className="text-left text-white"
            children={postDetails["content"]}
            rehypePlugins={[rehypeRaw]}
          />
          <div>{showUserAnswers()}</div>
          <hr />
          <div className="p-4">
            <h3 className="pb-2 text-left text-white">Your Answer</h3>

            <TinyMCE height={300} />
          </div>
        </div>

        <Button
          className="relative right-20 cursor-pointer rounded-sm bg-blue-300 py-2 px-2 text-left text-white sm:h-10"
          onClick={() => submitAnswer()}
        >
          Post your answer
        </Button>
      </div>
      <Rightbar />
    </div>
  );
}
