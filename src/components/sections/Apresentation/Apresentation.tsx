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

const Apresentation = () => {
  return (
    <section
      className="w-full relative z-0 text-white bg-fixed pt-10"
      style={{ backgroundImage: `url('/assets/heroCourses.jpg')` }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#0d778fd5] "></div>
      <div className="relative z-10 lg:flex max-w-[1200px] m-auto px-10">
        <ul className="space-y-10 lg:space-y-0 lg:p-5 flex lg:flex-row flex-col">
          {apresentationList.map((element, index) => (
            <li key={index} className="p-5 flex lg:justify-end flex-col">
              <h3 className="font-bold">{element.title}</h3>
              <p>{element.description}</p>
            </li>
          ))}
        </ul>
        <div className="bg-white text-black mt-10 p-10 font-bold ">
          <h3 className="mb-1"> Study at Your Own Pace</h3>
          <h2 className="text-xl mb-10">
            Boost Your Career by Learning Skills in High Demand{" "}
          </h2>

          <Link href={""}>GET STARTED</Link>
        </div>
      </div>
    </section>
  );
};

export default Apresentation;
