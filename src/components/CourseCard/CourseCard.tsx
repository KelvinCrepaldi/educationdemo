import { ICourse } from "@/interfaces/course.interface";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: ICourse }) => {
  return (
    <div className="w-full max-w-[450px] bg-white rounded border border-zinc-300 flex flex-col justify-between m-3">
      <div className="relative w-full aspect-video">
        <Image
          src={course.imgPath}
          alt={`Course image ${course.title}`}
          fill
          className="relative rounded-t"
        />
      </div>
      <div className="p-4 space-y-3">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p>{course.description}</p>
      </div>
      <div className="p-4 flex">
        <Link
          href={course.urlPath}
          className="w-full p-2 bg-blue-400 rounded text-center text-white"
        >
          See more...
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
