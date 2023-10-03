import { ReactNode } from "react";

const Hero = ({
  children,
  backgroundPath,
}: {
  children: ReactNode;
  backgroundPath?: string;
}): JSX.Element => {
  return (
    <section
      className="relative w-full pt-28 rounded-ee-[50px] lg:rounded-ee-[150px] flex items-center justify-center text-white  bg-cover"
      style={{ backgroundImage: `url('${backgroundPath}')` }}
    >
      <div className="absolute w-full h-full rounded-ee-[50px] lg:rounded-ee-[150px] bg-[#0d778fd5] top-0"></div>
      <div className="w-full  max-w-[1200px] p-5 mb-20 z-10 mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Hero;
