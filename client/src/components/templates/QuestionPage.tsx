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
import { LoadingAnimation } from "../atoms/LoadingAnimation";
import { timeAgo } from "../../utils/generalUtils";
import { BsFillTriangleFill } from "react-icons/bs";
var md5 = require("md5");
// triangle icon from react icons

export default function QuestionsPage() {
  const { id }: any = useParams();
  const [postDetails, setPostDetails]: any = React.useState({});
  const [answer, setAnswer] = React.useState<string>("");
  const [givenAnswers, setGivenAnswers] = React.useState<string[]>([]);
  const [newAnswers, setNewAnswers] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    fetchSinglePost(id, setPostDetails, setLoading);
  }, []);

  const trimedEmail =
    postDetails && postDetails.userEmail
      ? postDetails.userEmail.trim().toLowerCase()
      : "";
  const emailHash = md5(trimedEmail);
  const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=100&d=identicon&r=pg`;

  const showUserAnswers = (): any => {};

  const submitAnswer = () => {};

  return (
    <div className="flex min-h-screen w-full bg-neutral-800 text-white ">
      <div className=" w-full  sm:w-8/12">
        <div className="flex justify-end p-4"></div>
        <div className="">
          {loading ? (
            <LoadingAnimation className="flex justify-center" />
          ) : (
            <div className="pl-4">
              <Heading
                type="h2"
                className="m-0 p-0 pl-2 text-left text-gray-300"
                text={postDetails.title}
              />
              <p className="py-3 pl-4 text-left">
                Asked: {timeAgo(new Date(postDetails.createdAt))}
              </p>
              <hr className="border-t-2 border-gray-500" />

              <div className="flex items-start">
                <div className="flex flex-col gap-2 pt-6 pr-4">
                  <BsFillTriangleFill size={40} />
                  <span>{postDetails.upvotes - postDetails.downvotes}</span>
                  <BsFillTriangleFill size={40} className="rotate-180" />
                </div>

                <div className="prose">
                  <ReactMarkdown
                    className="pl-2 text-left text-white"
                    children={postDetails.content}
                    rehypePlugins={[rehypeRaw]}
                  />
                </div>
              </div>

              <div className="ml-14 py-4 flex flex-col gap-8 flex-wrap items-start sm:flex-row sm:justify-between">
                <span className="rounded-sm bg-gray-500 p-1 text-center">
                  {postDetails.tags}
                </span>
                <div>
                  <div className="flex flex-col gap-2 rounded-md bg-blue-300 py-4 px-6">
                    <div className="flex flex-row gap-2">
                      <img
                        className="h-10 w-10 rounded-md"
                        src={avatarUrl}
                        alt="user profile"
                      />
                      <div className="flex flex-col">
                        <span className="text-white">
                          {postDetails.userEmail.slice(0, 5)}
                        </span>
                        <span>
                          {new Date(postDetails.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>{showUserAnswers()}</div>
              <hr />
              <div className="p-4">
                <h3 className="pb-2 text-left text-white">Your Answer</h3>

                <TinyMCE height={300} setContent={setAnswer} />
              </div>
            </div>
          )}
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
