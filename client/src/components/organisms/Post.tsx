import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import { useMutation, useQueryClient } from "react-query";
import rehypeRaw from "rehype-raw";

export default function Post({
  postDetails,
  updateUpvote,
  updateDownvote,
  avatarUrl,
  type,
}: {
  postDetails: any;
  updateUpvote: any;
  updateDownvote: any;
  avatarUrl: string;
  which: string;
  type?: string;
}) {
  const [upvotes, setUpvotes] = React.useState<number>(0);
  const [downvotes, setDownvotes] = React.useState<number>(0);
  const queryClient = useQueryClient();

  return (
    <>
      <hr />
      <div className="flex items-start">
        <div className="flex flex-col gap-2 pt-6 pr-4 items-center">
          <BsFillTriangleFill
            size={40}
            onClick={() => setUpvotes(upvotes + 1)}
          />
          <span >{upvotes + downvotes}</span>
          <BsFillTriangleFill
            size={40}
            className="rotate-180"
            onClick={() => setDownvotes(downvotes - 1)}
          />
        </div>

        <div className="prose p-6 pb-2 text-white">
          <ReactMarkdown
            className="pl-2 text-left text-white"
            children={postDetails.content}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      </div>

      <div className="relative ml-14 flex flex-col flex-wrap items-start gap-8 py-4 sm:flex-row sm:justify-between">
        <button className="pl-6 text-slate-500">Share</button>

        <div
          className={`flex flex-col gap-2 rounded-md ${
            type === "QUESTION" ? "bg-slate-700" : "bg-slate-800"
          } py-4 px-6`}
        >
          <div className="flex flex-row gap-2">
            <img
              className="h-10 w-10 rounded-md"
              src={avatarUrl}
              alt="user profile"
            />
            <div className="flex flex-col">
              <span className="text-white">
                {postDetails.userEmail && postDetails.userEmail.slice(0, 5)}
              </span>
              <span>
                {"asked: " + new Date(postDetails.createdAt).toDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
