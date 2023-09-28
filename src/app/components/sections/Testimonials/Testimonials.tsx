import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    name: "Emma Hart",
    text: "“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”",
    imgPath: "/assets/testimonial/people1.jpg",
  },
  {
    name: "Eddie Johnson",
    text: "“Ut morbi felis, felis massa quam sit massa, amet, bibendum pulvinar elit in adipiscing amet imperdiet ac felis congue enim, elementum orci.”",
    imgPath: "/assets/testimonial/people2.jpg",
  },
  {
    name: "Jonathan Doe",
    text: "“Donec in varius facilisis justo, curabitur aliquet sit justo sed sit interdum diam dolor ornare quis a felis adipiscing hendrerit quisque enim.”",
    imgPath: "/assets/testimonial/people3.jpg",
  },
  {
    name: "Mike Edward",
    text: "“Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et, a, pulvinar gravida enim in blandit mauris vitae volutpat urna, sed justo hendrerit.”",
    imgPath: "/assets/testimonial/people4.jpg",
  },
];

export interface testimonials {
  name: string;
  text: string;
  imgPath: string;
}

const Testimonials = (): JSX.Element => {
  return (
    <section className="max-w-[1200px] m-auto px-5">
      <div className="my-20 flex w-full  justify-between items-center">
        <div className="max-w-[600px]">
          <h6 className=" mb-5">Testimonials</h6>
          <h3>Trusted by Thousand of Students and Tutors</h3>
        </div>
        <div className="flex">
          <h1 className="  mr-3">4.8</h1>
          <div>
            <div className="text-yellow-500 flex justify-start">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>2,394 Ratings</p>
            <p>Google Reviews</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((card: testimonials, index: number) => (
          <div
            key={index}
            className="bg-white rounded-[20px] flex-shrink flex-grow flex flex-col  p-10 pt-16 w-full relative my-7 pb-5 shadow hover:shadow-lg transition-all"
          >
            <Image
              src={card.imgPath}
              alt={`${card.name} photo`}
              width={80}
              height={80}
              className="absolute -top-10 rounded-xl shadow-lg"
            ></Image>

            <p className="w-full">{card.text}</p>
            <h6 className="pt-3">{card.name}</h6>
            <div className="text-yellow-500 flex justify-end">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
