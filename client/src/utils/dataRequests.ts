import Axios from "axios";
import { QuestionDetails} from "./Types";

export const fetchSinglePost = async (id: string, setPostDetails: Function, setLoading: Function) => {
  try {
    setLoading(true);
    const postData = await fetch(`/posts/${id}`);
    const postJSON = await postData.json();
    console.log("postJSON", postJSON);
    setPostDetails(postJSON);
    setLoading(false);
  } catch (err) {
    console.log("err", err);
  }
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

// get all questions
export const fetchAllQuestions = async (setQuestions: Function) => {
  try {
    const questionsData = await fetch("/getAllQuestions");
    console.log("questionsData", questionsData);
    const questionsJSON = await questionsData.json();
    console.log("questionsJSON", questionsJSON);
    setQuestions(questionsJSON);
  } catch (err) {
    console.log("err", err);
  }
};
