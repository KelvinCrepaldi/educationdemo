import { FaCrown } from "react-icons/fa";

const Features = () => {
  return (
    <section className="max-w-[1200px] m-auto space-y-20 my-20 px-5">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="p-5">
          <h3 className="font-bold text-lg pb-3">Features of Our Courses</h3>
          <h1 className="font-bold text-4xl pb-3">Why Choose Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="p-5">
          <ul>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-2xl text-white inline-block">
                <FaCrown />
              </div>
              <div>
                <h2 className="font-bold text-lg">Best Industry Leaders</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-2xl text-white inline-block">
                <FaCrown />
              </div>
              <div>
                <h2 className="font-bold text-lg">Best Industry Leaders</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-start my-2">
              <div className="p-2 mr-2 bg-orange-500 rounded-full text-2xl text-white inline-block">
                <FaCrown />
              </div>
              <div>
                <h2 className="font-bold text-lg">Best Industry Leaders</h2>
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
