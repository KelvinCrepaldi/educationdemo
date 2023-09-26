import Image from "next/image";
import Logo from "public/assets/logo-regular.png";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-white w-full p-10">
      <div className="max-w-[1200px] m-auto  py-10 flex flex-col lg:flex-row">
        <div className="px-10 w-full">
          <div className="mb-5">
            <Image src={Logo} alt="Education Logo "></Image>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="flex space-x-3 text-2xl mt-10">
            <div className="hover:text-orange-500 m-1 p-1 bg-slate-200 rounded">
              <BsFacebook />
            </div>
            <div className="hover:text-orange-500 m-1 p-1 bg-slate-200 rounded">
              <RiTwitterXFill />
            </div>
            <div className="hover:text-orange-500 m-1 p-1 bg-slate-200 rounded">
              <AiFillYoutube />
            </div>
            <div className="hover:text-orange-500 m-1 p-1 bg-slate-200 rounded">
              <AiFillInstagram />
            </div>
          </div>
        </div>
        <div className="px-10 min-w-max">
          <h1 className="text-xl font-bold mb-5"> Popular Courses</h1>
          <nav>
            <ul>
              <li className="hover:text-teal-500">
                <Link href={"/"}>LMS Interactive Content</Link>{" "}
              </li>
              <li className="hover:text-teal-500">
                <Link href={"/"}>Become a PHP Master</Link>
              </li>
              <li className="hover:text-teal-500">
                <Link href={"/"}>HTML5/CSS3 Essentials</Link>
              </li>
              <li className="hover:text-teal-500">
                <Link href={"/"}>JavaScript Development</Link>
              </li>
              <li className="hover:text-teal-500">
                <Link href={"/"}>WordPress Basic Tutorial</Link>
              </li>
              <li className="hover:text-teal-500">
                <Link href={"/"}>Introduction to Coding</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="px-10 min-w-max ">
          <h1 className="text-xl font-bold mb-5">Contact Info</h1>
          <h3 className="font-bold">Address</h3>
          <p>123 Fifth Avenue, New York, NY 10160</p>
          <h3 className="font-bold">Phone</h3>
          <p>929-242-6868</p>
          <h3 className="font-bold">Email</h3>
          <p>contact@info.com</p>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto px-10 border-t flex justify-between pt-4">
        <p>Copyright © 2023 Online Courses</p> <p>Powered by Online Courses</p>
      </div>
    </footer>
  );
};

export default Footer;
