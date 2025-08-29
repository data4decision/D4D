import React from "react";

import video from "../assets/video.jpg";

const VideoCall = () => {
  const [input, setInput] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // prevent page reload
    if (input.trim()) {
      window.location.href = `/room/${input.trim()}`;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="pt-24 pb-12 sm:pb-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Left Section */}
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                  Meet with your team or Client
                </h1>
                <p className="mt-4 text-lg text-gray-600 font-inter">
                  Start a conference call with your friend, family, or team
                  member. No sign-up required.
                </p>

                {/* Form Section */}
                <form onSubmit={submitHandler} className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter Your Room ID"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition duration-200 bg-[#0b0b5c] rounded-lg hover:bg-[#f45b20] focus:outline-none"
                      >
                        Join Us Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    2050
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Projects
                    <br />
                    Completed
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.72" y1="10.58" x2="15.72" y2="0.58" />
                    <line x1="0.72" y1="17.58" x2="15.72" y2="7.58" />
                    <line x1="0.72" y1="24.58" x2="15.72" y2="14.58" />
                    <line x1="0.72" y1="31.58" x2="15.72" y2="21.58" />
                    <line x1="0.72" y1="38.58" x2="15.72" y2="28.58" />
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    $5M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Investment
                    <br />
                    Supported
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div>
              <img
                className="w-full rounded-lg shadow-lg"
                src={video}
                alt="Video illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoCall;
