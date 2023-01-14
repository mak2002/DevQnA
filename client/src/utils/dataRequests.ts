import Axios from "axios";
import { QuestionDetails } from "../components/AskQuestionPage";

export const fetchSinglePost = async (id: string, setPostDetails: Function) => {
  const postData = await fetch(`http://localhost:3000/posts/${id}`);
  const postJSON = await postData.json();
  console.log("postJSON", postJSON);
  setPostDetails(postJSON);
};

export function putNewQuestions(
  questionDetails: QuestionDetails,
  userEmail: string
) {
  Axios.post("/postQuestion", {
    title: questionDetails.title,
    content: questionDetails.details,
    postType: "QUESTION",
    tags: questionDetails.tags,
    userId: userEmail,
  }).then((res) => {
    console.log("res", res);
  });
}

// put new user
export function putNewUser(user: string, email: string) {
  Axios.post("/putNewUser", {
    username: user,
    email: email,
  }).then((res) => {
    console.log("res", res);
  });
}
