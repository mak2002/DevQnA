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
import { fetchSinglePost, putNewPosts, updatePost } from "../../apis/Posts";
import Post from "../organisms/Post";

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
  const newPostMutation = useMutation(["newPost"], putNewPosts);

  const { data: postDetails, isLoading } = useQuery(
    ["singlePost", id],
    async () => fetchSinglePost(id)
  );

  const newUpvotes: any = postDetails?.upvotes + 1;
  const newDownvotes: any = postDetails?.downvotes - 1;

  let updatedUpvote = { ...postDetails, upvotes: newUpvotes };
  let updatedDownvote = { ...postDetails, downvotes: newDownvotes };

  const mutationUpvote = useMutation(["updatePostUpvote"], () =>
    updatePost(id, updatedUpvote)
  );

  const mutationDownvote = useMutation(["updatePostDownvote"], () =>
    updatePost(id, updatedDownvote)
  );

  const submitNewAnswer = () => {
    newPostMutation.mutate({ content: answer, postType: "ANSWER " });
  };

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

  const emailHash = md5(trimedEmail);
  const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=100&d=identicon&r=pg`;

  const showUserAnswers = (): any => {};

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

              <Post
                postDetails={postDetails}
                updateUpvote={updateUpvote}
                updateDownvote={updateDownvote}
                avatarUrl={avatarUrl}
              />

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
          onClick={submitNewAnswer}
        >
          Post your answer
        </Button>
      </div>

      <Rightbar />
    </div>
  );
}
