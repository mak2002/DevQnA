import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchAllPosts } from "../../apis/Posts";
import TitleAndAskQuestion from "../molecules/TitleAndAskQuestion";
import AllQuestions from "../organisms/Questions";

export default function SearchQuestions() {
  const { id }: any = useParams();
  const questions = useQuery("posts", fetchAllPosts);

  console.log("seach Quesiton>>>>>", id);
  return (
    <div className="min-h-screen  border-l-2 border-neutral-600 bg-neutral-800">
      <TitleAndAskQuestion title="Search Questions" />

      <div className="pt-8">
        <AllQuestions
          questions={questions.data}
          isLoading={questions.isLoading}
        />
      </div>
    </div>
  );
}
