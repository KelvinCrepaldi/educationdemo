"use client";
import { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const QuestionCard = ({
  question,
}: {
  question: { question: string; response: string };
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="shadow mb-5 p-5 bg-slate-50 cursor-pointer hover:shadow-md"
      onClick={handleOpen}
    >
      <h6 className="flex justify-between">
        {question.question}{" "}
        <span>{isOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}</span>
      </h6>
      <div
        className={`overflow-hidden  ${
          !isOpen ? "max-h-0" : "max-h-[100px]"
        } transition-all duration-300 ease-in-out`}
      >
        <p className="pt-5">{question.response}</p>
      </div>
    </li>
  );
};

export default QuestionCard;
