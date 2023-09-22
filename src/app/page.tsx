import { Apresentation, CourseCard, Hero, Subscribe } from "@/components";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { PopularCourses } from "@/components";
import { courses } from "@/data/database";
import { ICourse } from "@/interfaces/course.interface";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero backgroundPath="assets/heroMain.jpg">
        <div className="max-w-[660px]  space-y-10 lg:min-h-[60vh] mt-12">
          <Link href={""} className="space-x-2 flex items-center">
            <span className="text-orange-500">
              <AiFillPlayCircle />
            </span>

            <button>ON-DEMAND VIDEO TRAINING</button>
          </Link>
          <h1 className=" text-[35px] md:text-[70px] leading-none font-bold">
            Education Opens up the Mind
          </h1>
          <p className="md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex">
            <Link
              className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold mr-10"
              href={"/courses"}
            >
              START COURSE
            </Link>
            <Link href={"/courses"} className="flex space-x-2 items-center">
              <BiSolidRightArrow />

              <span>ALL COURSES</span>
            </Link>
          </div>
        </div>
      </Hero>
      <div className="max-w-[1200px] m-auto">
        <div className="flex py-20">
          <h2 className="w-1/3 text-lg lg:text-4xl font-bold">
            Technologies You Will Learn
          </h2>
          <div className="w-1/2">x</div>
        </div>
        <PopularCourses />
        <section className="flex flex-col md:flex-row mt-20 ml-3">
          {courses.map((course: ICourse, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </section>
        <Subscribe />
      </div>
      <Apresentation />
    </main>
  );
}
