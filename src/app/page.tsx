import { Hero, Subscribe } from "@/components";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";

import YouWillLearn from "./components/sections/YouWillLearn/YouWillLearn";
import CoursesHome from "./components/sections/CoursesHome/CoursesHome";
import Features from "./components/sections/Features/Features";
import Apresentation from "./components/sections/Apresentation/Apresentation";
import Testimonials from "./components/sections/Testimonials/Testimonials";

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
      <YouWillLearn />
      <CoursesHome />
      <Apresentation />
      <Features />
      <Testimonials />
      <Subscribe />
    </main>
  );
}
