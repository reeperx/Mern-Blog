import { Button } from "flowbite-react";
import { BsInfoSquare, BsNewspaper, BsTv } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <p className="text-xl font-semibold items-center justify-center text-center">
            John 15:7
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex text-center font-semibold items-center gap-x-2 bg-white border border-gray-500 text-sm text-black p-1 ps-3 rounded-md transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="/about"
            >
              If ye abide in me, and my words abide in you, <br />
              ye shall ask what ye will, and it shall be done unto you <br />
              <span></span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              THABO
              <span className="bg-clip-text text-[#c49c26] text-transparent">
                {" "}
                BESTER
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Dedicated to speak the truth about my treatment and the unfair
              treatment surrounding me and my case.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Link to={"/"}>
              <Button color={"dark"} outline>
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          Head over to our blogs to get the latest updates and news articles.
        </p>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <BsNewspaper className="h-10 w-10" />

            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Articles
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                A collection of articles telling my side of the truth.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <BsTv className="h-10 w-10" />
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Videos
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Interviews and media to help get the truth heard
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <HiPhotograph className="h-10 w-10" />
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Pictures
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Pictures showcasing the treatment and my lifestyle
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <BsInfoSquare className="h-10 w-10" />
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                24/7 Content
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
