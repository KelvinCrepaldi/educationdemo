import { CourseCard } from "@/components";
import { courses } from "@/data/database";
import { ICourse } from "@/interfaces/course.interface";

const CoursesList = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {courses.map((course: ICourse, index) => (
        <CourseCard course={course} key={index} />
      ))}
    </section>
  );
};

export default CoursesList;
