import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
//import SlideUp from "./SlideUp"; bounce annimation at projects

const projects = [
  {
    name: "UBEC WebApp",
    description:
      "As a passionate web developer, I had the privilege of designing and developing a website for the Utubora Education Center, a charity school dedicated to providing quality education to underprivileged children. This project was not just about creating a digital presence for the school, but also about creating a platform that could help bridge the gap between the school and potential donors, volunteers, and the community at large.",
    image: "/utu.jpg",
    github: "https://github.com/JsRennie/rental-management.git",
    figma:
      "https://www.figma.com/file/yGuydttliJkznvlGRjLXOR/UBEC-WebApp?type=design&node-id=0%3A1&mode=design&t=7sw7AqxF3USRhQSe-1",
    link: "",
  },
  {
    name: "Pipwallet Trading Agency",
    description:
      "An application that manages your todos/tasks, it able to categorize your tasks into section and set reminders and notiication about each",
    image: "/pipwallet.svg",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/kTHNL0ZXsx3gWrd1SEjG5m/Pipwallet?type=design&node-id=0%3A1&mode=design&t=BLm4XZOpUyvGFbZr-1",
    link: "https://www.pipwallet.co.ke/",
  },
  {
    name: "Zara Homes - personal project",
    description:
      "In an effort to address the challenges faced by clients, realtors, and property owners in the real estate market, I spearheaded the development of a comprehensive online platform for Zara Homes, a prominent real estate agency.The platform was designed to serve as a central hub, streamlining the process of finding and renting homes. It provided a seamless interface for clients to browse available properties, for realtors to list their offerings, and for property owners to manage their assets.",
    image: "/zara.png",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0%3A1&t=yoQI2iQruLiBiT9H-1",
    link: "https://www.figma.com/proto/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0-1&viewport=385%2C283%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
  {
    name: "eWallet Digital Banking Platform - personal project",
    description:
      "In the era of digital transformation, I took on the challenge of developing ‘eWallet’, an e-banking platform designed to simplify financial management for users. The platform was conceived with the aim of providing a comprehensive solution for managing transactions and tracking financial expenditures.",
    image: "/ewallet.png",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0%3A1&t=yoQI2iQruLiBiT9H-1",
    link: "https://www.figma.com/proto/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0-1&viewport=385%2C283%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
  {
    name: "Tunify Music App - personal project",
    description:
      "In the dynamic world of digital music, I led the development of ‘Tunify’, a cloud-based music streaming app. The primary goal of this project was to create a platform that provides users with access to a vast library of songs and playlists, anytime and anywhere. Tunify leverages cloud storage technology to host a diverse range of music tracks, allowing users to stream their favorite songs without the need for local storage. The app features an intuitive interface with functionalities such as search, create and manage playlists, and personalized music recommendations.",
    image: "/Tunify.png",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0%3A1&t=yoQI2iQruLiBiT9H-1",
    link: "https://www.figma.com/proto/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0-1&viewport=385%2C283%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
  {
    name: "Luna Health Mobile App - personal project",
    description:
      "In the rapidly evolving field of digital health, I was responsible for the development of ‘Luna Health’, a mobile health app. The app was designed to empower users to take charge of their health by providing them with a comprehensive set of tools and resources.Luna Health offers features such as tracking of health metrics, personalized health tips, appointment scheduling, and access to health records. The app integrates with various health devices to collect data and provide real-time feedback to the users.",
    image: "/luna.png",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0%3A1&t=yoQI2iQruLiBiT9H-1",
    link: "https://www.figma.com/proto/6YiKCpXxFYtCte8ckXbJn3/Pet-Website?node-id=0-1&viewport=385%2C283%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
  {
    name: "Maji Maji Water App",
    description: "An Online water delivery app",
    image: "/maji.png",
    github: "https://github.com/JsRennie",
    figma:
      "https://www.figma.com/file/opAjEuWalk0bf04RgwSZpQ/Maji-Maji-App?type=design&node-id=0%3A1&t=66Q1loqoMfXNaiq2-1",
    link: "https://www.figma.com/proto/opAjEuWalk0bf04RgwSZpQ/Maji-Maji-App?type=design&node-id=0-1&viewport=442%2C106%2C0.15&scaling=scale-down&starting-point-node-id=4%3A22",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-14">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/*<SlideUp offset="-300px opx -300px 0px">*/}
              <div className="flex flex-col animate-slideUpCubiBezier md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="snapshot of my project"
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
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
