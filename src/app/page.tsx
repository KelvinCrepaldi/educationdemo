import { Hero, Subscribe } from "@/components";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";

import YouWillLearn from "./components/sections/YouWillLearn/YouWillLearn";
import CoursesHome from "./components/sections/CoursesHome/CoursesHome";
import Features from "./components/sections/Features/Features";
import Apresentation from "./components/sections/Apresentation/Apresentation";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import CustomLink from "@/components/CustomLink/CustomLink";

export default function Home(): JSX.Element {
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
          <h1>Education Opens up the Mind</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex">
            <CustomLink href={"/courses"}>START COURSE</CustomLink>
            <Link
              href={"/courses"}
              className="rounded-full text-white font-bold hover:text-orange-400 flex items-center justify-center transition min-w-fit space-x-2"
            >
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
