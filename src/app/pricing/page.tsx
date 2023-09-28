import { Hero, Subscribe } from "@/components";
import PricingInfo from "./sections/PricingInfo/PricingInfo";
import Faq from "./sections/Faq/Faq";

export default function Pricing(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Hero backgroundPath="assets/heroCourses.jpg">
        <div className="max-w-[660px]  space-y-2  ">
          <h1 className="text-[32px] lg:text-[80px]">Pricing & FAQ</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </Hero>
      <PricingInfo />
      <Faq />
      <Subscribe />
    </main>
  );
}
