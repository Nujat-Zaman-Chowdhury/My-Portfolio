"use client";
import React, { useEffect } from "react";
import { FiDownload } from "react-icons/fi";

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import HireMe from "../components/HireMe"
import Photo from "../components/Photo"

const quote = {
    initial:{
        opacity:0,
        y:50,

    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}
const HomePage = () => {

  return (
    <>
    <section className="h-full my-10">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-center gap-20">
        

        <div className="flex-1 items-center justify-center">
        <Photo/>
        </div>

        <motion.div className="flex-1 flex flex-col  self-center p-2 md:p-0"
        variants={quote}
        initial="initial"
        animate="animate">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2125] dark:text-light"
          

          >
          Hi, <br />  I&apos;m{" "}
          <span className="text-primary">Nujat Zaman Chowdhury</span> <br />{" "}
            <span className="text-primary">a</span> Web Developer
          </h1>
         
          <p className="mt-4 text-base leading-relaxed text-[#4d4f52] dark:text-light">
            As a dedicated web developer, I thrive on creating sleek, efficient,
            and innovative web solutions. I am committed to pushing the boundaries of web design and development, continuously learning new
            technologies to deliver top-notch digital products.
          </p>
          <div className="flex gap-3 w-full items-start my-4">
            <Link className="flex items-center gap-2 text-lg text-light bg-dark  dark:bg-light dark:text-dark p-3 rounded-lg hover:bg-light hover:text-dark" download={true} href="/Resume.pdf" target={"_blank"}>Resume <FiDownload className="text-primary"/></Link>
            <Link className="flex items-center gap-2 text-lg text-light bg-dark dark:bg-light dark:text-dark p-3 rounded-lg hover:bg-light hover:text-dark" href="mailto: &apos;nujattazin@gmail.com&apos;" target={"_blank"}>Contact</Link>
        </div>
        </motion.div>
        
      </div>
            <HireMe/>
            
    </section>
    </>
  );
};

export default HomePage;
