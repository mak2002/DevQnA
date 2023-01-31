import React, { useEffect } from "react";
import Rightbar from "../organisms/Rightbar";
import { LinkButton } from "../atoms/LinkButton";
import SortingButtons from "../molecules/SortingButtons";
import AllQuestions from "../organisms/AllQuestions";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { _api } from "../../apis/api";
import { fetchAllPosts } from "../../apis/Posts";

export default function Home() {
  const questions = useQuery("posts", fetchAllPosts);

  return (
    <>
      <div className="h-max w-full bg-neutral-800 sm:w-7/12">
        <div className="mx-4 flex items-center justify-between pt-4 sm:items-start">
          <p className="text-xl text-white md:text-3xl">Top Questions</p>
          <LinkButton
            to={"/askquestion"}
            className="cursor-pointer rounded-sm bg-blue-500 py-2 px-2 text-center text-white sm:h-10"
          >
            Ask Question
          </LinkButton>
        </div>

        <div className="relative mx-4 mt-6 mb-4 flex justify-end">
          <SortingButtons className="border-collapse border border-gray-400 p-3 text-white transition-all duration-100 hover:bg-slate-600" />
        </div>

        <AllQuestions
          questions={questions.data}
          isLoading={questions.isLoading}
        />
      </div>
      <Rightbar />
    </>
  );
}
