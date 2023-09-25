import { CoursesList, Hero, Subscribe } from "@/components";

export default function Courses() {
  return (
    <main className="min-h-screen">
      <Hero backgroundPath="assets/heroCourses.jpg">
        <div className="max-w-[660px]  space-y-2  ">
          <h1 className="text-[32px] lg:text-[80px]">ALL Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </Hero>
      <div className="w-full m-auto max-w-[1200px] space-y-20 my-20">
        <CoursesList />
        <Subscribe />
      </div>
    </main>
  );
}
