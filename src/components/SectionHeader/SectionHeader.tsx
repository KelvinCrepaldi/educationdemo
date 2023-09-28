import Link from "next/link";
import CustomLink from "../CustomLink/CustomLink";

const SectionHeader = ({
  title,
  subtitle,
  text,
  linkPath,
}: {
  title: string;
  subtitle: string;
  text: string;
  linkPath?: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col  lg:items-center justify-between lg:flex-row">
      <div className="my-5 min-w-fit mr-6">
        <h6 className="font-bold">{subtitle}</h6>
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="border-l-2 border-orange-500 my-5 py-5 px-3  pl-7 lg:pl-14 flex">
        <p>{text}</p>
      </div>
      {linkPath ? (
        <div className="min-w-fit">
          <CustomLink href={"/courses"}>VIEW ALL COURSES</CustomLink>
        </div>
      ) : null}
    </div>
  );
};
export default SectionHeader;
