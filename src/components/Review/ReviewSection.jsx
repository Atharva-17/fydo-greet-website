import React from "react";
import Image from "next/image";

const ReviewSection = () => {
  return (
    <>
      <div className="md:px-20 md:py-20 px-4 py-16">
        <div className="text-center text-[#18191F]">
          <p className="lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[1.25rem] font-extrabold">
            Our Clients Speak
          </p>
          <p className="lg:text-[1.125rem] sm:text-[1rem] text-[0.875rem]">
            We have been working with clients around the world
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <div className="px-8 py-12 shadow-md rounded-md text-center">
              <p className="text-[1.5rem] font-semibold">
                Efficient Collaborating
              </p>
              <p className="mt-4">
                Fydo's event ticket booking platform had streamlined our
                ticketing process and enhanced attendee experience. The best
                part was the dedicated relationship manager, that guy Saroj, he
                was very helpful and helped me streamline the whole event with
                ease.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <Image
                src="/assets/review1.svg"
                width={56}
                height={56}
                alt="icon"
              />
              <p className="mt-2 text-[1.125rem] text-[#18191F] font-bold">
                Farzaan
              </p>
              <p className="text-[0.875rem] text-[#474A57]">FunHub Odisha</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-8 py-12 shadow-md rounded-md text-center">
              <p className="text-[1.5rem] font-semibold">Intuitive Design</p>
              <p className="mt-4">
                Felt happy to tie up with an Events booking platform from my own
                state, and best part I gotta know they sent their own
                representative on the event day to help us with coordination and
                event management. It was very helpful and helped me streamline
                the whole event.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <Image
                src="/assets/review2.svg"
                width={56}
                height={56}
                alt="icon"
              />
              <p className="mt-2 text-[1.125rem] text-[#18191F] font-bold">
                Dhiren Das
              </p>
              <p className="text-[0.875rem] text-[#474A57]">
                Event Coordinator
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-8 py-12 shadow-md rounded-md text-center">
              <p className="text-[1.5rem] font-semibold">Mindblowing Service</p>
              <p className="mt-4">
                Fydo's event ticketing is a lifesaver for our music festivals.
                The platform's versatility in handling large-scale events and
                providing detailed insights into ticket sales have significantly
                contributed to the success of our festivals.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <Image
                src="/assets/review3.svg"
                width={56}
                height={56}
                alt="icon"
              />
              <p className="mt-2 text-[1.125rem] text-[#18191F] font-bold">
                Ravi Agarwal
              </p>
              <p className="text-[0.875rem] text-[#474A57]">
                Greatway Event Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
