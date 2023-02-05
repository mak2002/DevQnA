import axios from "axios";
import Axios from "axios";
import { QuestionDetails } from "./Types";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});



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


