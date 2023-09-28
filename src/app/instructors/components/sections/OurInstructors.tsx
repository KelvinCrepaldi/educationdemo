import { SectionHeader } from "@/components";
import InstructorCard, {
  InstructorType,
} from "../InstructorCard/InstructorCard";

const instructors: InstructorType[] = [
  {
    name: "Deborah Holmes",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor1.jpg",
    courseType: "HTML5/CSS3 Instructor",
    profilePath: "/instructors",
  },
  {
    name: "Bruce Stevens",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor2.jpg",
    courseType: "Marketing Instructor",
    profilePath: "/instructors",
  },
  {
    name: "Michelle Baker",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor3.jpg",
    courseType: "WordPress Instructor",
    profilePath: "/instructors",
  },
  {
    name: "Paul Santos",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor4.jpg",
    courseType: "JavaScript Instructor",
    profilePath: "/instructors",
  },
  {
    name: "Donna Carroll",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor5.jpg",
    courseType: "Marketing Instructor",
    profilePath: "/instructors",
  },
  {
    name: "Scott Valdez",
    description:
      "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas.",
    imagePath: "/assets/instructors/instructor6.jpg",
    courseType: "PHP Instructor",
    profilePath: "/instructors",
  },
];

const OurInstructors = (): JSX.Element => {
  return (
    <section className="max-w-[1200px] m-auto my-20 px-5 space-y-10">
      <SectionHeader
        subtitle="Teachers With Vision"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
        title="Our Instructors"
      />
      <div className="flex flex-wrap justify-center">
        {instructors.map((instructor: InstructorType, index: number) => (
          <InstructorCard instructor={instructor} key={index}></InstructorCard>
        ))}
      </div>
    </section>
  );
};
export default OurInstructors;
