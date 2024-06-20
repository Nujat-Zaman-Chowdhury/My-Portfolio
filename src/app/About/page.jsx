import AnimatedText from "../../components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../../public/profilepic.png";
import Skills from "../../components/Skills";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Nujat Portfolio | About Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <main className="flex flex-col w-full items-center justify-center">
        <div className="mb-16">
        <AnimatedText text="About Me"/>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 p-3 lg:p-0">
          
          <div className="flex flex-col items-start justify-start">
            <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">
              Biography
            </h1>
            <p className="font-medium dark:text-light">
              I am a passionate Frontend Developer with a strong foundation in
              modern web technologies and a keen eye for design. Recently, I
              have completed my studies and am eager to begin my professional
              journey in the field.
              <br /><br /> My enthusiasm for
              frontend development drives me to continuously learn and stay
              updated with the latest industry trends. I am excited to bring my
              skills and dedication to a dynamic team, where I can contribute to
              innovative projects and grow as a professional.
            </p>
          </div>
          <div className="col-span-1 rounded w-[300px] h-[300px] md:h-[400px] md:w-[400px] border-3 border-dark p-4">
            <Image
              src={profilePic}
              alt="Nujat"
              className="profile w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">
              Education
            </h1>
            <ul className="font-medium">
              <li className="mb-4">
                <h2 className="font-bold dark:text-light">Bachelor of Science in Computer Science and Engineering</h2>
                <p className="dark:text-light">National University, Bangladesh</p>
                <p className="dark:text-light">Graduated: 2021</p>
                
              </li>
              <li className="mb-4">
                <h2 className="font-bold dark:text-primary">Online Course Work</h2>
                <p className="dark:text-light">Programming Hero</p>
                <p className="dark:text-light">Completed: 2024</p>
                
              </li>
            </ul>
          </div>
        </div>
        <div>
            <Skills/>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
