import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Certificates 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I have earned several IT certifications that have strengthened my skills in areas such as [networking, cybersecurity, programming, etc.]. 
          These certifications demonstrate my knowledge of industry standards and my ability to solve real-world technical challenges.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href="https://www.credly.com/badges/889ba627-1313-4b14-8e8b-cb0ed0faf9d0/public_url"
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://i.postimg.cc/Vv90P5Xp/aws-academy-graduate-aws-academy-cloud-foundations-QUITLONG.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                  AWS Academy Cloud Foundations
                  </h1>
                  <p className="leading-relaxed">The **AWS Academy Cloud Foundations** certificate demonstrates foundational knowledge of AWS cloud services, security, and pricing models. It validates your understanding of core cloud concepts, providing a strong base for further AWS certifications and cloud-related careers.</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}