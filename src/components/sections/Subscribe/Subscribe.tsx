const Subscribe = () => {
  return (
    <section className=" flex flex-col justify-center lg:items-center md:text-center space-y-4 mx-7 my-20">
      <h1 className="text-2xl md:text-3xl font-bold">Join Our Community</h1>
      <p className="text-base md:text-lg">
        Enter your email address to register to our newsletter subscription
        delivered on regular basis!
      </p>
      <input
        placeholder="Enter your email"
        className="w-[350px] p-3 border"
      ></input>
      <button className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold mr-10  w-[200px]">
        SUBSCRIBE
      </button>
    </section>
  );
};
export default Subscribe;
