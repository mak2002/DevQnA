import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Rightbar from "../organisms/Rightbar";
import TinyMCE from "../atoms/TinyMCE";
import rehypeRaw from "rehype-raw";
import Button from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { LoadingAnimation } from "../atoms/LoadingAnimation";
import { timeAgo } from "../../utils/generalUtils";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  fetchAllAnswers,
  fetchSinglePost,
  putNewPosts,
  updatePost,
} from "../../apis/Posts";
import Post from "../organisms/Post";
import firebase from "firebase/compat/app";
import { BsFillTriangleFill } from "react-icons/bs";

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
  const [upvotes, setUpvotes] = React.useState<number>(0);
  const [downvotes, setDownvotes] = React.useState<number>(0);

  const newPostMutation = useMutation(["newPost"], putNewPosts);
  const email = firebase.auth().currentUser?.email;
  const queryClient = useQueryClient();

  const { data: answers } = useQuery(["answers", id], async () =>
    fetchAllAnswers(id)
  );

  const { data: postDetails, isLoading } = useQuery(
    ["singlePost", id],
    async () => fetchSinglePost(id)
  );

  const submitNewAnswer = () => {
    newPostMutation.mutate({
      content: answer,
      postType: "ANSWER",
      userEmail: email,
      parentPostId: id,
    });
  };

  const updateUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const updateDownvote = () => {
    setDownvotes(downvotes - 1);
  };

  const trimedEmail = postDetails?.userEmail?.trim().toLowerCase() ?? "";

  const emailHash = md5(trimedEmail);
  const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=100&d=identicon&r=pg`;

  const showUserAnswers = (): any => {
    return answers?.map((answer: any) => {
      return (
        <Post
          postDetails={answer}
          which={"separate QuestionPage"}
          updateDownvote={updateDownvote}
          updateUpvote={updateUpvote}
          avatarUrl={avatarUrl}
        />
      );
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-neutral-800 text-white ">
      <div className="w-full sm:w-10/12">
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
                which={"QuestionPage"}
                updateUpvote={updateUpvote}
                updateDownvote={updateDownvote}
                avatarUrl={avatarUrl}
                type="QUESTION"
              />

              <div>{answers ? showUserAnswers() : <p>No answers yet</p>}</div>
              <hr />
              <div className="p-4">
                <h3 className="pb-2 text-left text-white">Your Answer</h3>

                <TinyMCE height={300} setContent={setAnswer} />
              </div>
            </div>
          )}
        </div>

        {!isLoading && (
          <Button
            className="relative left-8 cursor-pointer rounded-sm bg-blue-300 py-2 px-2 text-left text-white sm:h-10"
            onClick={submitNewAnswer}
          >
            Post your answer
          </Button>
        )}
      </div>

      {/* <Rightbar /> */}
    </div>
  );
}
