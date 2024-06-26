"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-40"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="Temuujin portrait."
              src="/temuujin-portrait.jpg"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Temuujin.</span> I'm a{" "}
        <span className="font-bold">full-stack web developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 sm:flex-row px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none w-60 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/75 dark:text-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:scale-125 transition" />
        </Link>

        <a
          className="group bg-white rounded-full px-7 py-3 flex items-center justify-center gap-2 outline-none w-60 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download my CV{" "}
          <HiDownload className="opacity-60 group-hover:scale-125 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white text-gray-750 rounded-full p-4 flex items-center gap-2 text-[1.20rem] borderBlack focus:scale-[1.20] hover:scale-[1.20] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer dark:bg-white/10 dark:text-white/70"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white text-gray-750 rounded-full p-4 flex items-center gap-2 text-[1.5rem] borderBlack focus:scale-[1.20] hover:scale-[1.20] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer dark:bg-white/10 dark:text-white/70"
            href="https://github.com/temkode"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
