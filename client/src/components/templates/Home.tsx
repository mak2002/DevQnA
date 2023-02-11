import React, { useEffect } from "react";
import Rightbar from "../organisms/Rightbar";
import { LinkButton } from "../atoms/LinkButton";
import SortingButtons from "../molecules/SortingButtons";
import AllQuestions from "../organisms/Questions";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { _api } from "../../apis/api";
import { fetchAllPosts } from "../../apis/Posts";
import TitleAndAskQuestion from "../molecules/TitleAndAskQuestion";

export default function Home() {
  const questions = useQuery("posts", fetchAllPosts);

  return (
    <>
      <div className="h-max w-full border-l-2 border-neutral-600 bg-neutral-800">
        <TitleAndAskQuestion title="Ask Questions" />

        <div className="relative mx-4 mt-6 mb-4 flex justify-end">
          <SortingButtons className="border-collapse border border-gray-400 p-3 text-white transition-all duration-100 hover:bg-slate-600" />
        </div>

        <AllQuestions
          questions={questions.data}
          isLoading={questions.isLoading}
        />
      </div>
    </>
  );
}
