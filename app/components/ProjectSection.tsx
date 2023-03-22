import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
//import SlideUp from "./SlideUp"; bounce annimation at projects

const projects = [
  {
    name: "Hostel Managements",
    description:
      "An application that manages your rentals property. A student is able to register into the app then uploads her/his details then proceeds to make an application to book a room",
    image: "/hostel.png",
    github: "#",
    figma: "",
    link: "https://www.figma.com/proto/xvNVEw33o3iTYFD2bAkAHN/Rental-management?node-id=0-1&viewport=494%2C710%2C0.11&scaling=min-zoom&starting-point-node-id=94%3A39&show-proto-sidebar=1",
  },
  {
    name: "Todo",
    description:
      "An application that manages your todos/tasks, it able to categorize your tasks into section and set reminders and notiication about each",
    image: "/Todo.png",
    github: "#",
    figma: "",
    link: "https://www.figma.com/file/e3r2Eibqwy10aJmtbADLKd/Websie-Design?node-id=0%3A1&t=2cjf3IR7YHzQfraU-1",
  },
  {
    name: "Pet Adoption",
    description: "An Online pet Adoption website",
    image: "/pet.png",
    github: "#",
    figma: "",
    link: "https://www.figma.com/proto/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0-1&viewport=385%2C283%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/*<SlideUp offset="-300px opx -300px 0px">*/}
              <div className="flex flex-col animate-slideUpCubiBezier md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.figma} target="_blank">
                      <FiFigma
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/*</SlideUp>*/}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
