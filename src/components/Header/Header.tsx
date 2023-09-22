import Image from "next/image";
import Link from "next/link";
import LogoImg from "public/assets/logo-regular-free-img.png";

type pageType = {
  name: string;
  urlPath: string;
};

const pagesPaths: pageType[] = [
  { name: "Home", urlPath: "/" },
  { name: "All Courses", urlPath: "/courses" },
  { name: "About Us", urlPath: "/about" },
  { name: "Instructors", urlPath: "/instructors" },
  { name: "Pricing & FAQ", urlPath: "/pricing" },
  { name: "Contact", urlPath: "/contact" },
];

const Header = () => {
  return (
    <header className="relative w-full flex justify-center z-10">
      <div className="flex absolute top-0 w-full justify-between max-w-[1200px] text-white mt-3">
        <Image src={LogoImg} alt="Education demo logo" />
        <nav className="flex items-center absolute right-0 lg:relative">
          <ul className="flex items-center mr-5 flex-col lg:flex-row">
            {pagesPaths.map((page: pageType, index: number) => (
              <li key={index}>
                <Link href={page.urlPath} className="m-1 p-2">
                  {page.name}
                </Link>
              </li>
            ))}
            <li></li>
          </ul>
          <Link
            className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold"
            href={""}
          >
            START LEARNING
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
