import Axios from "axios";

export const fetchSinglePost = async (id, setPostDetails) => {
  const postData = await fetch(`http://localhost:3000/posts/${id}`);
  const postJSON = await postData.json();
  console.log("postJSON", postJSON);
  setPostDetails(postJSON);
};

export function putNewQuestions(questionDetails, setQuestionDetails) {
  console.log("putNewQuestions", questionDetails, questionDetails.tags);
  Axios.post("/postQuestion", {
    title: questionDetails.title,
    content: questionDetails.details,
    authorId: "d7f1c709-4fea-4ab0-86a3-03bdfb357b49",
    postType: "QUESTION",
    tags: questionDetails.tags,
    userId: "9371f314-1c93-11ec-9621-0242ac130002",
  }).then((res) => {
    console.log("res", res);
  });
}
