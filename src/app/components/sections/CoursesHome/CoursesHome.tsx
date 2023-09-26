import { CoursesList, SectionHeader } from "@/components";

const CoursesHome = () => {
  return (
    <section className="max-w-[1200px] m-auto space-y-20 my-20 px-5">
      <SectionHeader
        subtitle="Course Program"
        title="Popular Courses"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
        linkPath="/courses"
      />
      <CoursesList />
    </section>
  );
};

export default CoursesHome;
