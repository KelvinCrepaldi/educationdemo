import { DecorativeBar, SectionHeader } from "@/components";
import Image from "next/image";

const FounderApresentation = (): JSX.Element => {
  return (
    <section className="max-w-[1200px] mx-auto my-10 lg:my-20 ">
      <div className="px-5">
        <SectionHeader
          subtitle=""
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
          title="What We're All About
"
        />
      </div>

      <div className="w-full my-20 flex flex-col lg:flex-row">
        <Image
          alt="About Bobby harris image"
          src={"/assets/aboutPerson.jpg"}
          width={752}
          height={511}
          className="pr-5 w-full"
          style={{ objectFit: "contain" }}
        />

        <div className="p-5">
          <h5 className="pb-10">Learn Something Every Day</h5>
          <DecorativeBar />
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat.
          </p>
          <h6 className="pt-10">Bobby Harris</h6>
          <h6>Founder</h6>

          <Image
            alt="Bobby Harris signature"
            src={"/assets/bobbysign.png"}
            width={80}
            height={76}
            className="opacity-40 py-5 "
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default FounderApresentation;
