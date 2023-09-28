import { CourseCard } from "@/components";
import { courses } from "@/data/database";
import { ICourse } from "@/interfaces/course.interface";

const CoursesList = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row">
      {courses.map((course: ICourse, index) => (
        <CourseCard course={course} key={index} />
      ))}
    </div>
  );
};

export default CoursesList;
