import Image from "next/image";

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

const Testimonials = () => {
  return (
    <section className="max-w-[1200px] m-auto">
      <div className="my-20 flex w-full mx-5">
        <div className="max-w-[500px]">
          <h6 className="text-lg font-bold">Testimonials</h6>
          <h1 className="text-4xl font-bold">
            Trusted by Thousand of Students and Tutors
          </h1>
        </div>
        <div className="flex">
          <div className="text-5xl">10.0</div>
          <div>
            <p>2,394 Ratings</p>
            <p>Google Reviews</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {testimonials.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] flex flex-col  p-10 pt-16 w-full max-w-[550px] relative my-10 mx-3"
          >
            <Image
              src={card.imgPath}
              alt={`${card.name} photo`}
              width={80}
              height={80}
              className="absolute -top-10 rounded-xl shadow-lg"
            ></Image>

            <p>{card.text}</p>
            <h6 className="font-bold pt-3">{card.name}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
