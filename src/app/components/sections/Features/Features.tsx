import { FaCrown, FaCertificate } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const Features = (): JSX.Element => {
  return (
    <section className="max-w-[1200px] m-auto space-y-20 my-20 px-5">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="py-5">
          <h6 className="font-bold pb-3">Features of Our Courses</h6>
          <h3 className="font-bold pb-3">Why Choose Us?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="py-5">
          <ul>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-white hover:bg-orange-400 transition">
                <FaCrown />
              </div>
              <div>
                <h6 className="font-bold">Best Industry Leaders</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-white hover:bg-orange-400 transition">
                <AiFillClockCircle />
              </div>
              <div>
                <h6 className="font-bold">Best Industry Leaders</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-white hover:bg-orange-400 transition">
                <FaCertificate />
              </div>
              <div>
                <h6 className="font-bold">Best Industry Leaders</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Features;
