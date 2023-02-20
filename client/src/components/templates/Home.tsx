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
import Pagination from "../molecules/Pagination";

export default function Home() {
  const questions = useQuery("posts", fetchAllPosts);
  const [sortOrder, setSortOrder] = React.useState("");

  return (
    <div className="flex w-full flex-col border-l-2 border-neutral-600 bg-neutral-800">
      <TitleAndAskQuestion title="Ask Questions" /> 

      <div className="relative mx-4 mt-6 mb-4 flex justify-end">
        <SortingButtons setSortOrder={setSortOrder} className="border-collapse border border-gray-400 p-3 text-white transition-all duration-100 hover:bg-slate-600" />
      </div>

      <AllQuestions
      sortOrder={sortOrder}
        questions={questions.data}
        isLoading={questions.isLoading}
      />

      {/* <div className="py-8">
        <Pagination />
      </div> */}
    </div>
  );
}
