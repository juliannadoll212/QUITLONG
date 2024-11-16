import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="bg-brown-600 container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-brown-500">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Julianna
            
          </h1>
          <div className="lg:max-w-sm lg:w-full md:w-2/3 w-1/2 aspect-w-4 aspect-h-3">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://art.pixilart.com/sr2e64b83aa0a6d.gif"
          />
        </div>
          <p className="mb-8 leading-relaxed">
            From sleek, modern websites to dynamic, scalable applications, I
            bring your ideas to life with precision and passion. Let’s create
            something incredible together — tailored just for your needs and
            vision.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
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
        <div className="lg:max-w-sm lg:w-full md:w-2/3 w-1/2">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/456762368_2313939438951125_7904014297850412253_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcykt1r9GbH2cn6yZqamKMrQ4BSx_UAxetDgFLH9QDF-MYojxonX2IIEKjhF_k2-dEpEFlaD5oDwQz3SG6i5n9&_nc_ohc=r4wXx1ARctIQ7kNvgEhtxtV&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=AA9yFv-m27v2yJdfNdyMoiM&oh=00_AYDYOKAyWT2B1chO_I45x07D6U7V3-0Xq7G7uuUiSex8vg&oe=673E2C05"
          />
        </div>
      </div>
    </section>
  );
}