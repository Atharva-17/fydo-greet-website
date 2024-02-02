import React from "react";
import Accordion from "./Accordion";

const FaqSection = () => {
  return (
    <>
      <div className="lg:pt-20 lg:pb-16 pt-10 pb-10 max-w-screen-md mx-auto">
        <p className="md:text-[3rem] text-[1.25rem] text-center font-extrabold text-[#333333]">
          Frequently Asked Questions
        </p>
        <div className="md:mt-12 mt-0 px-4 py-6">
          <Accordion
            title="What is Greet?"
            answer="Greet is a subsidiary of Fydo (Lfyd Services Pvt Ltd), is an event booking platform designed to streamline the process of organising and attending events. It offers a user-friendly interface for event organisers and attendees."
          />
          <Accordion
            title="What's Unique about Greet?"
            answer="I like to use Tailwind"
          />
          <Accordion
            title="How can I book tickets for an event on Greet?"
            answer="I am using Supabase!"
          />
          <Accordion
            title="Can I use cashback earned at partner shops to book event tickets?"
            answer="I am using Supabase!"
          />
          <Accordion
            title="Can I sell tickets for my own event on Greet?"
            answer="I am using Supabase!"
          />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
