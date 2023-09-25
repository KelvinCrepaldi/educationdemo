"use client";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "public/assets/logo-regular-free-img.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute top-0 z-20 ">
      <div className="max-w-[1200px] m-auto p-3 flex justify-between items-center">
        <Image src={LogoImg} alt="Education demo logo" />

        <nav className="flex ">
          <ul
            className={`flex flex-col lg:flex-row absolute lg:static left-0 top-[100px] bg-[#ECF0F2] divide-y lg:divide-y-0 lg:bg-transparent lg:text-white w-full overflow-hidden lg:flex ${
              isOpen ? "" : "hidden"
            }`}
          >
            {pagesPaths.map((page: pageType, index: number) => (
              <li key={index}>
                <Link
                  href={page.urlPath}
                  className="m-2 p-1 text-center w-full block hover:text-teal-400"
                  onClick={handleMenu}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold hidden lg:inline-block"
            href={""}
          >
            START LEARNING
          </Link>
        </nav>
        <button
          className="lg:hidden text-white bg-orange-500 p-2 text-xl rounded"
          onClick={handleMenu}
        >
          {!isOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
    </header>
  );
};

export default Header;
