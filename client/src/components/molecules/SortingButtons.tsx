import React from "react";
import Button from "../atoms/Button";
const sortingButtons: string[] = ["Bountied", "Hot", "Week", "Month"];

const renderSortingButtons = (className: string) => {
  return sortingButtons.map((buttonName) => {
    return (
      <Button key={buttonName} className={className}>
        {buttonName}
      </Button>
    );
  });
};

export default function SortingButtons(props: { className: string }) {
  return <div className="">{renderSortingButtons(props.className)}</div>;
}
