import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <div className="px-[5rem] py-[1rem] flex flex-col items-center justify-center h-full bg-black">
      <h1 className="font-black text-[48px] text-center text-white">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-lg text-gray-400">Watch anywhere. Cancel anytime.</p>
      <p className="text-lg text-slate-400 mb-4 ">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div>
        <input
          type="email"
          placeholder="Email address"
          className="px-[5rem] placeholder:-translate-x-8 placeholder:text-gray-500 text-gray-500 py-3 rounded-lg bg-black/10 border-2"
        />
        <Button title="Get Started" />
      </div>
    </div>
  );
}

export default Home;
