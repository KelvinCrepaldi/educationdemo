import { ICourse } from "@/interfaces/course.interface";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: ICourse }): JSX.Element => {
  return (
    <article className="w-full max-w-[450px] bg-white rounded border border-zinc-300 flex flex-col justify-between m-2">
      <div className="relative w-full aspect-video">
        <Image
          src={course.imgPath}
          alt={`Course image ${course.title}`}
          fill
          className="relative rounded-t"
        />
      </div>
      <div className="p-4 space-y-3">
        <h5 className="font-bold">{course.title}</h5>
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
      <div className="pb-3 px-4 flex flex-col items-end">
        <div className="w-full h-2 rounded opacity-50 bg-slate-400"></div>
        <span className="font-bold text-xs text-teal-800 opacity-90 mt-1">
          0% Complete
        </span>
      </div>
    </article>
  );
};

export default CourseCard;
