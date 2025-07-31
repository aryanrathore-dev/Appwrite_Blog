import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 border-t-2 border-t-gray-500 rounded-b-sm">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between">
              <div className="mb-4 inline-flex justify-center items-center">
                <Logo className="w-[60px]" />
              </div>
              <div className="text-gray-300 text-sm">
                Mega Blog App is a dynamic, user-centric platform meticulously 
                crafted for bloggers and content creators of all levels. 
                Whether you are an experienced writer or just beginning your journey, 
                Mega Blog App provides an intuitive and streamlined interface that simplifies 
                the process of publishing and sharing your ideas with a global audience. 
                Leveraging cutting-edge web technologies, the app delivers a seamless, 
                engaging, and responsive experience tailored to both creators and readers alike.
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-gray-500">
                Other Profile
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://www.linkedin.com/in/aryanrathore-dev/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://github.com/aryansingh1624"
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://www.instagram.com/aryan.singh_16/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-[14px] font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-400  text-center">
            &copy; 2024 Aryan Singh Rathore. All Rights Reserved. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;