"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import NextLink from "next/link";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center item-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.jpeg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hello, I&#39;m Gerald!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2lx">
            I&#39;m a {""}
            <span className="font-sembold text-teal-600">
              Frontend Developer{""}
            </span>
            based in Nairobi, Kenya. Working on creating UI design Systems that
            makes life easier and more user-friendly!
          </p>
          <div className="space-x-10">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold cursor-pointer px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <NextLink
              href="https://drive.google.com/file/d/17HVgFq0K8t5_IHX8_kwICtfMuWljThSF/view?usp=share_link"
              target="_blank"
              className="text-neutral-100 font-semibold cursor-pointer px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              My Resume
            </NextLink>
          </div>
        </div>
      </div>
      <div>
        <Link
          to="about"
          className="flex flex-row justify-center"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
