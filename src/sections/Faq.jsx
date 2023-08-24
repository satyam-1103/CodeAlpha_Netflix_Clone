import React, { useState } from "react";
import FaqComponent from "../components/FaqComponent";
import Button from "../components/Button";

const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      setOpen(!open);
    }
    setOpen(index);
  };

  const faqData = [
    {
      quest: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
    
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      quest: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      quest: "Where can I watch?",
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
    
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      quest: "How do I cancel",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      quest: "What can I watch on Netflix?",
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      quest: "Is Netflix good for kids",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
    
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  return (
    <div className="h-[120vh] pb-[4rem] py-14 bg-black flex flex-col items-center justify-center gap-8">
      <h2 className="text-6xl font-black text-white ">
        Frequently Asked Questions
      </h2>

      <div className=" max-w-[1028px] h-auto">
        {faqData.map((data, index) => {
          return (
            <FaqComponent
              key={index}
              open={index === open}
              quest={data.quest}
              answer={data.answer}
              toggle={() => toggle(index)}
            />
          );
        })}

        <p className="text-2xl text-white text-center mt-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="items-center flex justify-center mt-10">
          <input
            type="email"
            placeholder="Email address"
            className="px-[5rem] placeholder:-translate-x-8 placeholder:text-gray-500 text-gray-500 py-3 rounded-lg bg-black/10 border-2"
          />
          <Button title="Get Started" y="3" x="6" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
