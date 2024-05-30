import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col bg-gray-800 pb-36">
      <main className="flex-grow bg-gray-800">
        <section className="bg-blue-50 dark:bg-gray-800" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-8 text-center">
              <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-white">
                CON<span className="text-teal-500">T</span>ACT ME
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                I embrace tech opportunities along the line
              </p>
            </div>
            <div className="flex flex-col sm:flex-row align-middle items-center justify-around">
              <div className="flex flex-col items-center mb-8 sm:mb-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-gray-50 mb-4">
                  <FaMapMarkerAlt className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    RadhaSwami Nagar, Jagatganj
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Varnasi, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-gray-50 mb-4">
                  <FaPhoneAlt className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +91 7269083569
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mail: samriddhimishra343@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Contact;
