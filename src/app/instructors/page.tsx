import { Hero, Subscribe } from "@/components";
import OurInstructors from "./components/sections/OurInstructors";

export default function Instructors(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Hero backgroundPath="assets/heroInstructors.jpg">
        <div className="max-w-[660px]  space-y-2  ">
          <h1 className="text-[32px] lg:text-[80px]">Instructors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </Hero>

      <OurInstructors />
      <Subscribe />
    </main>
  );
}
