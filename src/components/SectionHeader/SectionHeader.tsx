import Link from "next/link";

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
        <h6 className="font-bold mb-5">{subtitle}</h6>
        <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
      </div>
      <div className="border-l-2 pl-14 border-orange-500 my-5 p-5 flex">
        <p>{text}</p>
      </div>
      {linkPath ? (
        <div className="min-w-fit">
          <Link
            href={"/courses"}
            className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold my-5"
          >
            VIEW ALL COURSES
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default SectionHeader;
