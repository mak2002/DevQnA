import React, { useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import Rightbar from "../organisms/Rightbar";
import TinyMCE from "../atoms/TinyMCE";
import rehypeRaw from "rehype-raw";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { LoadingAnimation } from "../atoms/LoadingAnimation";
import { timeAgo } from "../../utils/generalUtils";
import { BsFillTriangleFill } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { fetchSinglePost, updatePost } from "../../apis/Posts";

var md5 = require("md5");

interface postDetails {
  title: string;
  content: string;
  details2: string;
  tags: string;
  createdAt: string;
  upvotes: number;
  downvotes: number;
  userEmail: string;
  id: string;
  views: number;
  postType: string;
  updatedAt: string;
}

export default function QuestionsPage() {
  const { id }: any = useParams();
  const [answer, setAnswer] = React.useState<string>("");
  const [givenAnswers, setGivenAnswers] = React.useState<string[]>([]);
  const [newAnswers, setNewAnswers] = React.useState<string[]>([]);

  const {
    data: postDetails,
    isLoading,
    error,
  } = useQuery(["singlePost", id], async () => fetchSinglePost(id));

  const newUpvotes: any = postDetails?.upvotes + 1;
  const newDownvotes: any = postDetails?.downvotes - 1;

  let updatedUpvote = { ...postDetails, upvotes: newUpvotes };
  let updatedDownvote = { ...postDetails, downvotes: newDownvotes };

  const mutationUpvote = useMutation(
    ["updatePostUpvote", id, updatedUpvote],
    () => updatePost(id, updatedUpvote)
  );

  const mutationDownvote = useMutation(
    ["updatePostDownvote", id, updatedDownvote],
    () => updatePost(id, updatedDownvote)
  );

  const updateUpvote = () => {
    try {
      mutationUpvote.mutate(updatedUpvote);
    } catch (error) {
      console.error(error);
    }
  };

  const updateDownvote = () => {
    try {
      mutationDownvote.mutate(updatedDownvote);
    } catch (error) {
      console.error(error);
    }
  };

  const trimedEmail = postDetails?.userEmail?.trim().toLowerCase() ?? "";

  // const trimedEmail = 'abcd'
  console.log("trimedEmail", trimedEmail);

  const emailHash = md5(trimedEmail);
  const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=100&d=identicon&r=pg`;

  const showUserAnswers = (): any => {};

  const submitAnswer = () => {};

  return (
    <div className="flex min-h-screen w-full bg-neutral-800 text-white ">
      <div className=" w-full  sm:w-8/12">
        <div className="flex justify-end p-4"></div>
        <div className="">
          {isLoading ? (
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
                  <BsFillTriangleFill size={40} onClick={updateUpvote} />
                  <span>{postDetails.upvotes + postDetails.downvotes}</span>
                  <BsFillTriangleFill
                    size={40}
                    className="rotate-180"
                    onClick={updateDownvote}
                  />
                </div>

                <div className="prose">
                  <ReactMarkdown
                    className="pl-2 text-left text-white"
                    children={postDetails.content}
                    rehypePlugins={[rehypeRaw]}
                  />
                </div>
              </div>

              <div className="ml-14 flex flex-col flex-wrap items-start gap-8 py-4 sm:flex-row sm:justify-between">
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
                          {"asked: " +
                            new Date(postDetails.createdAt).toDateString()}
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
