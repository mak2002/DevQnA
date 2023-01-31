import axios from "axios";
import Axios from "axios";
import { QuestionDetails } from "./Types";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

// export const fetchSinglePost = async (
//   id: string,
//   setPostDetails: Function,
//   setLoading: Function
// ) => {
//   try {
//     setLoading(true);
//     const postData = await fetch(`/posts/${id}`);
//     const postJSON = await postData.json();
//     setPostDetails(postJSON);
//     setLoading(false);
//   } catch (err) {
//     console.log("err", err);
//   }
// };

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


