import React from "react";
import Button from "../atoms/Button";
const sortingButtons: string[] = ["Latest", "Oldest", "Hot"];

const renderSortingButtons = (className: string, setSortOrder: Function) => {
  
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSortOrder(e.currentTarget.textContent);
  };

  return sortingButtons.map((buttonName) => {
    return (
      <Button key={buttonName} onClick={handleOnClick} className={className}>
        {buttonName}
      </Button>
    );
  });
};

export default function SortingButtons(props: {
  className: string;
  setSortOrder: Function;
}) {
  return (
    <div className="">
      {renderSortingButtons(props.className, props.setSortOrder)}
    </div>
  );
}
