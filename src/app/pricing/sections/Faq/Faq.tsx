import QuestionCard from "../../components/QuestionCard/QuestionCard";

interface IQuestion {
  question: string;
  response: string;
}

const questionList: IQuestion[] = [
  {
    question: "Who Should Take an Online Course?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
  {
    question: "How Do I Access My Course?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
  {
    question: "Are There Prerequisites or Language Requirements?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
  {
    question: "Can I Take More than One Course at a Time?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
  {
    question: "My Payment Did Not Go Through. What Do I Do?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
  {
    question: "How Does Online Learning Work?",
    response:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvi nar dapibus leo.",
  },
];

const Faq = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-10 p-5">
      <div className="grid lg:grid-cols-2">
        <div className="mr-[50%] mb-5">
          <h6>have Any Questions?</h6>
          <h3>FAQ{"'"}s</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod.
          </p>
        </div>

        <ul>
          {questionList.map((question: IQuestion, index: number) => (
            <QuestionCard question={question} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
