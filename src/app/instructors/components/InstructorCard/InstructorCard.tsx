import Image from "next/image";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

export interface InstructorType {
  name: string;
  description: string;
  profilePath: string;
  courseType: string;
  imagePath: string;
}
export interface InstructorCardProps {
  instructor: InstructorType;
}

const InstructorCard = ({ instructor }: InstructorCardProps): JSX.Element => {
  return (
    <article className="max-w-[360px] flex flex-col m-2 bg-white rounded-[20px] shadow hover:shadow-lg">
      <div className="w-full aspect-video relative">
        <Image
          src={instructor.imagePath}
          alt={`${instructor} photo profile`}
          fill
          className="relative rounded-t-[20px]"
        ></Image>
      </div>
      <div className="p-7 space-y-3">
        <h6 className="text-sm font-bold">{instructor.courseType}</h6>
        <h5 className="font-bold">{instructor.name}</h5>
        <p>{instructor.description}</p>

        <Link
          href={"/courses"}
          className="rounded-full hover:text-orange-300 flex  items-center text-orange-500 space-x-5"
        >
          <BiSolidRightArrow />
          <span>View Profile</span>
        </Link>
      </div>
    </article>
  );
};
export default InstructorCard;
