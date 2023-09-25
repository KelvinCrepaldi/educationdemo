import {
  Apresentation,
  CourseCard,
  CoursesList,
  Hero,
  SectionApresentation,
  Subscribe,
} from "@/components";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { PopularCourses } from "@/components";
import { courses } from "@/data/database";
import { ICourse } from "@/interfaces/course.interface";

import { FaCrown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero backgroundPath="assets/heroMain.jpg">
        <div className="max-w-[660px]  space-y-10  lg:mt-12">
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
      <div className="max-w-[1200px] m-auto space-y-20 py-20 px-5">
        <SectionApresentation />
        <PopularCourses />
        <CoursesList />
        <Subscribe />
      </div>
      <Apresentation />
      <div className="max-w-[1200px] m-auto space-y-20 py-20 px-5">
        <section className="flex flex-wrap lg:flex-nowrap">
          <div className="pb-10 px-10">
            <h3 className="font-bold text-lg pb-3">Features of Our Courses</h3>
            <h1 className="font-bold text-4xl pb-3">Why Choose Us?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <ul>
              <li className="flex flex-col lg:flex-row items-start my-2">
                <div className="p-2 bg-orange-500 rounded-full text-2xl text-white inline-block m-2">
                  <FaCrown />
                </div>
                <div className="px-2">
                  <h2 className="font-bold text-lg">Best Industry Leaders</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-start my-2">
                <div className="p-2 bg-orange-500 rounded-full text-2xl text-white inline-block m-2">
                  <FaCrown />
                </div>
                <div className="px-2">
                  <h2 className="font-bold text-lg">Best Industry Leaders</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-start my-2">
                <div className="p-2 bg-orange-500 rounded-full text-2xl text-white inline-block m-2">
                  <FaCrown />
                </div>
                <div className="px-2">
                  <h2 className="font-bold text-lg">Best Industry Leaders</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
