type LeftSidebarContent = {
  title: string;
  link: string;
};

type LoginInButtions = {
  content: string;
  className: string;
  icon: JSX.Element;
  onClick: () => void;
};

type QuestionForm = {
  title: string;
  description: string;
  inputWidth: string;
  name: string;
}[];

type QuestionDetails = {
  title: string;
  details: string;
  tags: string[];
};

export type {
  LeftSidebarContent,
  LoginInButtions,
  QuestionForm,
  QuestionDetails,
};
