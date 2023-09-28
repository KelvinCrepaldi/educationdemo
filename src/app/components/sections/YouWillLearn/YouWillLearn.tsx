import Image from "next/image";

const techPaths = [
  "/assets/techs/css3.svg",
  "/assets/techs/react.svg",
  "/assets/techs/angular.svg",
  "/assets/techs/html5.svg",
  "/assets/techs/js.svg",
  "/assets/techs/node-js.svg",
  "/assets/techs/python.svg",
];

const YouWillLearn = (): JSX.Element => {
  return (
    <section className="p-5 max-w-[1200px] m-auto lg:flex my-20">
      <h3 className="w-1/2 pr-20">Technologies You Will Learn</h3>
      <div className=" flex flex-wrap my-10 lg:my-0">
        {techPaths.map((imgTech: string, index: number) => (
          <div className="relative aspect-square w-[50px] m-3" key={index}>
            <Image
              src={imgTech}
              alt="Tech Logo"
              fill
              className="relative"
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouWillLearn;
