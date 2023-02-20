import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchAllPosts, fetchPostsByTitle } from "../../apis/Posts";
import TitleAndAskQuestion from "../molecules/TitleAndAskQuestion";
import AllQuestions from "../organisms/Questions";

export default function SearchQuestions() {
  const { id }: any = useParams();
  console.log("id>>>>>", id);

  const questions = useQuery(["posts", id], async () =>
    fetchPostsByTitle(id)
  );

  console.log("}}}}}}}}}", questions.data);

  return (
    <div className="min-h-screen w-full border-l-2 border-neutral-600 bg-neutral-800">
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
