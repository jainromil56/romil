import React from "react";
import {FiArrowRight} from 'react-icons/fi'

const LandingPage = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="mt-10 mx-auto">
          <div class="lg:w-5/6 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mx-10 md:mx-0 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class="text-gray-900 text-5xl title-font font-semibold mb-4">
                Hi, I'm Romil Jain
              </h1>
              <h2 class="text-2xl title-font text-black">
                Software Engineer
              </h2>
              
              <p class="leading-relaxed mb-4 mt-4">
                A self-motivated and hardworking individual constantly involved in self-improvement and the ability to perform well in a team, Passionate about coding
              </p>
              <div class="flex">
                <button class="flex text-xl mt-5 mr-auto text-white bg-purple-700 border-0 py-4 px-8 focus:outline-none hover:bg-purple-900 rounded-lg">
                  View Resume <FiArrowRight className="text-2xl mt-1 ml-3"/>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full mx-10 md:mx-0 lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
