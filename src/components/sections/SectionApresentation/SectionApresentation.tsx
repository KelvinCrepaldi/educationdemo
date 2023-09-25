import Image from "next/image";

const SectionApresentation = () => {
  return (
    <section>
      <h2 className="text-xl lg:text-4xl font-bold w-full text-center mb-10">
        Technologies You Will Learn
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className=" flex flex-wrap">
          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/css3.svg"}
              alt="css3 logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/react.svg"}
              alt="react logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/angular.svg"}
              alt="angular logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/angular.svg"}
              alt="angular logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/html5.svg"}
              alt="html5 logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/js.svg"}
              alt="javascript logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/node-js.svg"}
              alt="node logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/python.svg"}
              alt="python logo"
              fill
              className="relative"
            ></Image>
          </div>

          <div className="relative aspect-square w-[50px] m-3">
            <Image
              src={"/assets/techs/vuejs.svg"}
              alt="vue logo"
              fill
              className="relative"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionApresentation;
