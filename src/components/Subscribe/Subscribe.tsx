const Subscribe = (): JSX.Element => {
  return (
    <section className=" flex flex-col items-center m-20 px-5 text-center">
      <h1>Join Our Community</h1>
      <p className="my-5">
        Enter your email address to register to our newsletter subscription
        delivered on regular basis!
      </p>
      <input
        placeholder="Enter your email"
        className="w-[350px] p-3 border"
      ></input>
      <div className="my-5 flex justify-center">
        <button className="bg-orange-500 rounded-full py-3 px-7 text-white font-bold hover:bg-orange-400 flex items-center justify-center transition min-w-fit">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
};
export default Subscribe;
