import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { timeAgo } from "../../utils/generalUtils";
import { getAvatarUrl } from "../../utils/User";
import { LinkButton } from "../atoms/LinkButton";

export default function Post({postDetails, updateUpvote, updateDownvote, avatarUrl}: {postDetails: any, updateUpvote: any, updateDownvote: any, avatarUrl: string}) {
  return (
    <>
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
                  {"asked: " + new Date(postDetails.createdAt).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
