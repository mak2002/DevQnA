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
    link: "/questions",
  },
  {
    title: "Tags",
    link: "/tags",
  },
  {
    title: "Users",
    link: "/users",
  },
  {
    title: "Companies",
    link: "/companies",
  },
];
