import React from "react";

export default function About() {
  return (
    <section id="about">
  <div className="bg-white-600 container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ml-[768px] pb-16">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-brown-500 mr-[480px]">
      <h1 className="title-font sm:text-8xl text-8xl mb-4 font- text-black font-serif">
        Hello,
      </h1>
      <p className="mb-8 leading-relaxed text-3xl font- font-serif">
        My name is Julianna
      </p>

      <p className="mb-8 leading-relaxed">
        I'm an IT student in Centro Escolar University.
        I am actively pursuing knowledge and skills in information technology,
        with a focus on areas like programming, networking, software development,
        and cybersecurity. Even though I'm an IT student, I do some other things too outside the field: I do film photography, I like fashion,
        and I'm a nerd when it comes to movies.
      </p>

      <div className="flex justify-center">
        <a
          href="#contact"
          className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Work With Me
        </a>
        <a
          href="#projects"
          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          See My Past Work
        </a>
      </div>
    </div>

    <div className="lg:max-w-sm lg:w-full md:w-2/3 w-1/2 transform -translate-x-[1550px] pb-28">
      <img
        className="object-cover object-center rounded-full"
        alt="hero"
        src="https://i.postimg.cc/G2gCstMs/462569174-2115001642248342-3312179068236150228-n.jpg"
      />
    </div>
  </div>
</section>

    
  );
}