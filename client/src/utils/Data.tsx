import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "./firebaseFile";
import { LoginInButtions, QuestionForm } from "./Types";

export const loginInButtions = [
  {
    content: "Log in with Google",
    className:
      "mt-3 flex w-3/4 items-center justify-center gap-2 rounded bg-slate-600 py-2 text-white sm:w-1/4",
    icon: <FcGoogle />,
    onClick: () => {
      signInWithGoogle();
    },
  },
  {
    content: "Log in with GitHub",
    className:
      "mt-4 flex w-3/4 items-center justify-center gap-2 rounded bg-slate-400 py-2 text-white sm:w-1/4",
    icon: <FaGithub />,
    onClick: () => {
      signInWithGoogle();
    },
  },
  {
    content: "Log in with Facebook",
    className:
      "mt-4 flex w-3/4 items-center justify-center gap-2 rounded bg-blue-800 py-2 text-white sm:w-1/4",
    icon: <GrFacebook />,
    onClick: () => {
      signInWithGoogle();
    },
  },
];

export const questionForm: QuestionForm = [
  {
    title: "Title",
    description:
      'Be specific and imagine you"re asking a question to another person.',
    inputWidth: "h-10 w-full pl-2",
    name: "title",
  },
  {
    title: "What did you try and what were you expecting?",
    description:
      "Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.",
    inputWidth: "h-20 w-full pl-2",
    name: "details",
  },
  {
    title: "Tags",
    description: "Add up to 5 tags to describe what your question is about.",
    inputWidth: "h-10 w-full pl-2",
    name: "tags",
  },
];

export const leftSidebarContent = [
  {
    title: "Questions",
    link: "/search/lorem",
  },
  {
    title: "Tags",
    link: "/tags",
  },
  // {
  //   title: "Users",
  //   link: "/users",
  // },
];

export const tagsInfo = [
  {
    title: "JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
    link: "/tags/javascript",
  },
  {
    title: "React",
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    link: "/tags/react",
  },
  {
    title: "Node.js",
    description:
      "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    link: "/tags/nodejs",
  },
  {
    title: "HTML",
    description:
      "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    link: "/tags/html",
  },
];
