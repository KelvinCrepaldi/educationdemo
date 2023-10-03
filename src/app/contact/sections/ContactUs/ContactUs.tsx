import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { DecorativeBar } from "@/components";

const ContactUs = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-20 px-5 grid lg:grid-cols-2 ">
      <div className="mr-5">
        <h3 className="mb-5">Contact Us</h3>
        <DecorativeBar />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <ul className="mt-10 space-y-5">
          <li className="flex items-center space-x-2">
            <IoLocationSharp />
            <p>123 Fifth Avenue, New York, NY 10160</p>
          </li>
          <li className="flex items-center space-x-2">
            <IoIosMail />
            <p>contact@example.com</p>
          </li>
          <li className="flex items-center space-x-2">
            <BsFillTelephoneFill />
            <p>1 234 567 890</p>
          </li>
        </ul>
        <div className="flex items-center mt-10">
          <h6 className="mr-10">Keep in Touch</h6>
          <div className="flex space-x-3 text-2xl">
            <div className="text-orange-500 hover:text-orange-400  m-1 p-1 rounded">
              <BsFacebook />
            </div>
            <div className="text-orange-500 hover:text-orange-400 m-1 p-1 rounded">
              <RiTwitterXFill />
            </div>
            <div className="text-orange-500 hover:text-orange-400 m-1 p-1 rounded">
              <AiFillYoutube />
            </div>
            <div className="text-orange-500 hover:text-orange-400 m-1 p-1 rounded">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white rounded-xl shadow-xl mt-10 lg:mt-0">
        <div className="mb-10">
          <h5>Have Questions?</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <form>
          <input
            className="border w-full p-2 my-2 bg-slate-50 text-zinc-600"
            placeholder="Name"
          />
          <input
            className="border w-full p-2 my-2 bg-slate-50 text-zinc-600"
            placeholder="Email Address"
          />
          <input
            className="border w-full p-2 my-2 bg-slate-50 text-zinc-600"
            placeholder="Subject"
          />
          <textarea
            className="border w-full p-2 my-2 bg-slate-50 text-zinc-600 min-h-[130px]"
            placeholder="your Messages"
          />
        </form>
        <button className="bg-orange-500 rounded-full py-3 px-7 text-sm mx-3 text-white font-bold hover:bg-orange-400 flex items-center justify-center transition min-w-fit">
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
