import Link from "next/link";

const PopularCourses = () => {
  return (
    <section className="w-full my-10">
      <div className="flex flex-col  lg:items-center justify-between lg:flex-row px-7">
        <div className="my-5 w-[300px]">
          <h3 className="font-bold">Top Categories</h3>
          <h2 className="text-2xl lg:text-4xl w-full font-bold">
            Popular Courses
          </h2>
        </div>
        <div className="border-l-2 border-orange-500 my-5 p-5 flex lg:max-w-[40%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div>
          <Link
            href={"/courses"}
            className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold my-5"
          >
            VIEW ALL COURSES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
