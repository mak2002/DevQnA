import axios from "axios";
import Axios from "axios";
import { useMutation } from "react-query";
import { putNewPosts } from "../apis/Posts";
import { QuestionDetails } from "./Types";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export function putNewQuestions(
  questionDetails: QuestionDetails,
  userEmail: string
) {
  Axios.post("/posts", {
    title: questionDetails.title,
    content: questionDetails.details,
    postType: "QUESTION",
    tags: questionDetails.tags,
    userEmail: userEmail,
  }).then((res) => {
    console.log("res", res);
  });
}

// export const newPostMutation = useMutation(["newPost"], putNewPosts);