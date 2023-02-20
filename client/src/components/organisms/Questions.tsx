import { timeAgo } from "../../utils/generalUtils";
import { getAvatarUrl } from "../../utils/User";
import { LinkButton } from "../atoms/LinkButton";
import { LoadingAnimation } from "../atoms/LoadingAnimation";
import Rightbar from "./Rightbar";

function renderQuestions(questions: any, isLoading: boolean): any {
  if (isLoading) {
    return (
      <div className="relative top-12 flex h-screen justify-center text-white sm:w-full">
        <LoadingAnimation />
      </div>
    );
  }

  console.log("new work>>>>????", questions);

  return questions.map((question: any) => {
    if (question) {
      return (
        <div className="flex border-collapse flex-col border-b-2 border-t-2 border-gray-500 bg-neutral-700 py-6">
          <div className="pl-12 md:flex md:items-start md:justify-around">
            <div className="flex gap-4 text-right text-white md:flex-col">
              <span>{question.upvotes - question.downvotes + " votes"}</span>
              <span>2 answers</span>
              <span>{"2 views"}</span>
            </div>

            <LinkButton
              className="break-normal text-left text-blue-400 md:w-3/4"
              to={`/questions/${question.id}`}
              id={question.id}
            >
              {question.title}
            </LinkButton>
          </div>

          <div className="flex items-center justify-end gap-2">
            <img
              className="h-10 w-10 rounded-md"
              src={getAvatarUrl(question.userEmail || "user")}
              alt="user profile"
            />
            <a href="" className="text-blue-700">
              {question.userEmail?.slice(0, 5) || "user"}
              &nbsp;
            </a>

            <span className="mr-2 text-right text-white ">
              {"asked " + timeAgo(new Date(question["createdAt"]))}
            </span>
          </div>
        </div>
      );
    }
  });
}

export default function AllQuestions({ questions, isLoading }: any) {
  return <div>{renderQuestions(questions, isLoading)}</div>;
}
