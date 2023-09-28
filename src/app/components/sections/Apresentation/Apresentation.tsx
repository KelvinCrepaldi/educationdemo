import Link from "next/link";

const apresentationList = [
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
  },
  {
    title: "Education",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
  },
  {
    title: "Certificate",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
  },
];

const Apresentation = (): JSX.Element => {
  return (
    <section
      className="w-full relative z-0 text-white bg-fixed my-10 pt-5"
      style={{ backgroundImage: `url('/assets/heroCourses.jpg')` }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#0d778fd5]"></div>
      <div className="relative z-10 lg:flex max-w-[1200px] m-auto ">
        <ul className="lg:space-y-0 lg:space-x-3 flex lg:flex-row flex-col">
          {apresentationList.map((element, index) => (
            <li key={index} className="px-5 py-3 flex lg:justify-end flex-col">
              <h6 className="font-bold">{element.title}</h6>
              <p>{element.description}</p>
            </li>
          ))}
        </ul>
        <div className="bg-white text-black mt-10 p-10 font-bold mx-10 lg:mx-0">
          <h6 className="mb-1"> Study at Your Own Pace</h6>
          <h5 className="mb-10">
            Boost Your Career by Learning Skills in High Demand{" "}
          </h5>

          <Link href={""}>GET STARTED</Link>
        </div>
      </div>
    </section>
  );
};

export default Apresentation;
