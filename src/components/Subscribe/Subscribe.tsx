const Subscribe = (): JSX.Element => {
  return (
    <section className=" flex flex-col justify-center lg:items-center md:text-center m-20 mx-5">
      <h1 className="text-2xl md:text-5xl font-bold">Join Our Community</h1>
      <p className="text-base my-5 md:text-lg">
        Enter your email address to register to our newsletter subscription
        delivered on regular basis!
      </p>
      <input
        placeholder="Enter your email"
        className="w-[350px] p-3 border"
      ></input>
      <div className="my-5">
        <button className="bg-orange-500 rounded-full py-2 px-7 text-white font-bold w-[200px]">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
};
export default Subscribe;
