"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div class="bg-cover object-cover bg-[url('/assets/heroimg.jpeg')]">
        <div class="container lg:max-w-screen-[1330px] lg:px-10 mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-7/12 md:text-left text-center px-4 md:mt-0 mt-8">
              <div class="mb-12 lg:mb-0 lg:max-w-[570px] text-white">
                <p className="lg:text-[3.5rem] md:text-[2rem] text-[1.5rem] font-bold lg:leading-[64px] ">
                  Effortlessly go live with your event in a go!
                </p>
                <p className="lg:text-[1rem] text-[0.75rem] lg:mt-8 md:mt-2 mt-4">
                  Empower your events, whether on-ground or digital, with our
                  user-friendly platform loved by millions, making event
                  creation and hosting a breeze
                </p>
                <button
                  onClick={openModal}
                  className="bg-[#FE3838] px-8 py-4 font-bold rounded-xl lg:mt-14 md:mt-8 mt-10 md:w-auto w-full text-[12px]"
                >
                  LIST YOUR EVENT
                </button>
              </div>
            </div>
            <div class="w-full md:w-5/12 px-4">
              <div class="relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0">
                <img
                  src="/assets/hero-phone.png"
                  alt="hero image"
                  class="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={openModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[700px] h-[600px] flex flex-col transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="sticky top-0 z-10 flex justify-between items-center py-[18px] px-6 border-b">
                      <p className="text-[#344054] text-lg font-semibold">
                        List your event
                      </p>
                      <div className="cursor-pointer" onClick={closeModal}>
                        <Image
                          src="/assets/close.svg"
                          width={14}
                          height={14}
                          alt="icon"
                        />
                      </div>
                    </div>

                    <div className="overflow-y-auto no-scrollbar sm:px-6 px-4">
                      <div className="flex items-start rounded-lg gap-[16px] border border-[#FEDF89] bg-[#fffcf5] p-4 mt-6">
                        <Image
                          src="/assets/rocket.svg"
                          width={42}
                          height={42}
                          alt="icon"
                        />
                        <p className="text-[#f79009] leading-[3.6vh] sm:text-[16px] text-sm">
                          Fill up these details or you can always contact us on
                          <span className="font-bold">
                            +91 73259 85456 / +91 73259 85456
                          </span>
                          . We will handle everything for you so you can enjoy.
                        </p>
                      </div>

                      <form className="">
                        <div className="mt-6">
                          <label
                            for="text"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Event Name
                          </label>
                          <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[14px] sm:py-4 py-[10px]"
                            placeholder="Enter event name"
                            required
                          />
                        </div>
                        <div className="mt-6">
                          <label
                            for="text"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Event Cover Photo
                          </label>
                          <div className="flex sm:flex-row flex-col gap-4">
                            <div className="relative rounded-lg sm:w-[370px] w-auto h-auto">
                              <img src="/assets/king-img.jpg" alt="" className="w-full h-full rounded-xl" />
                            </div>

                            <div class="flex items-center justify-center w-full">
                              <label
                                for="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-[126px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Image
                                    src="/assets/upload.svg"
                                    width={40}
                                    height={40}
                                    alt="icon"
                                  />
                                  <p className="mb-2 text-sm text-[#667085]">
                                    <span className="font-semibold text-[#FE3838]">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Short Event Description
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                          ></textarea>
                        </div>

                        <div className="mt-6">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Event Details
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                          ></textarea>
                        </div>
                        <div className="mt-6 flex justify-between gap-4">
                          <div className="w-[73%]">
                            <label
                              for="message"
                              class="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Event Venue
                            </label>
                            <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-[14px] sm:py-4 py-[10px]"
                              placeholder="Enter event name"
                              required
                            />
                          </div>

                          <div className="">
                            <label
                              for="message"
                              class="mb-2 text-sm font-medium text-gray-900"
                            >
                              On Map
                            </label>
                            <button className="flex items-center gap-2 rounded-lg bg-[#FE3838] text-white text-sm font-semibold px-[14px] sm:py-4 py-[10px]">
                              <Image
                                src="/assets/distance.svg"
                                width={24}
                                height={24}
                                alt="icon"
                              />{" "}
                              <p className="sm:block hidden">Locate on Map</p>
                            </button>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                              <label
                                for="message"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Event Date
                              </label>
                              <input
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-[14px] sm:py-4 py-[10px]"
                                placeholder="Enter event name"
                                required
                              />
                            </div>
                            <div>
                              <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Event Time
                              </label>
                              <input
                                type="time"
                                className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-[14px] sm:py-4 py-[10px]"
                                placeholder="Enter event name"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                              <label
                                for="message"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Event Duration
                              </label>
                              <select className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block px-[14px] sm:py-4 py-[10px]">
                                <option>1 Hours</option>
                                <option>2 Hours</option>
                                <option>3 Hours</option>
                                <option>4+ Hours</option>
                              </select>
                            </div>
                            <div>
                              <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Event Langauge
                              </label>
                              <select className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block px-[14px] sm:py-4 py-[10px]">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Bengali</option>
                                <option>Marathi</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Suitable for Age-Group
                          </label>
                          <select className="bg-gray-50 border border-gray-300 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block px-[14px] sm:py-4 py-[10px]">
                            <option>Adult (18 - 25+)</option>
                            <option>Midle Age (30 - 45+)</option>
                            <option>Senior citizen (50 above)</option>
                          </select>
                        </div>
                      </form>
                    </div>

                    <div className="sticky bottom-0 z-10 flex justify-end items-center py-[16px] border-t px-6 gap-3 mt-5">
                      <button
                        onClick={closeModal}
                        className="border rounded-lg text-[#344054] text-sm font-semibold px-4 py-[10px]"
                      >
                        Cancel
                      </button>
                      <button className="rounded-lg bg-[#FE3838] text-white text-sm font-semibold px-4 py-[10px]">
                        List Event
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default HeroSection;
