import React, {
  ReactComponentElement,
  ReactFragment,
  ReactHTMLElement,
  useState,
} from "react";
import { questionForm } from "../../utils/Data";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import TinyMCE from "../atoms/TinyMCE";
import Button from "./../atoms/Button";
import Input from "./../atoms/Input";
import { Heading } from "./../atoms/Heading";

const FormFields = (
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  setContent: Function
) => {
  return questionForm.map((item) => {
    return (
      <div className="m-5 flex w-4/6 flex-col items-start justify-start bg-zinc-800 p-6">
        <Heading
          type="h3"
          className="text-start text-white"
          text={item.title}
        />
        <p className="text-start text-sm text-white">{item.description}</p>

        {item.name === "title" || item.name === "tags" ? (
          <Input
            type="text"
            placeholder={item.title}
            className={`${item.inputWidth} my-3 resize-none bg-zinc-700 text-white`}
            onChange={handleInputChange}
            name={item.name}
            key={item.name}
          />
        ) : (
          <TinyMCE height={300} setContent={setContent} />
        )}
      </div>
    );
  });
};

export default function AskQuestionForm({
  handleInputChange,
  handleSubmit,
  setContent,
}: any) {
  return (
    <>
      {FormFields(handleInputChange, setContent)}
      <Button
        type="submit"
        className="rounded bg-blue-500 p-2 ml-5 text-white"
        text="Submit"
        onClick={handleSubmit}
      />
    </>
  );
}
