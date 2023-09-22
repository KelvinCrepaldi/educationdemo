import Image from "next/image";
import Logo from "public/assets/logo-regular.png";

const Footer = () => {
  return (
    <footer className="w-full p-10">
      <div>
        <Image src={Logo} alt="Education Logo"></Image>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <p>@ @ @ @</p>
      </div>
    </footer>
  );
};

export default Footer;
