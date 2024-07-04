import Head from "next/head";
import React from "react";
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";

const Project = ({
  title,
  type,
  image,
  link,
  github,
  imageWidth,
  imageHeight,
  summary,
  features,
  technologies,
}) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative container mx-auto rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-primary"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline">
          <h2 className="my-2 w-full text-left text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
        </Link>
        <p className="w-full hidden md:flex">{summary}</p>
        <div>
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc pl-5">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Technologies Used:</h3>
          <ul className="list-disc pl-5">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" title="client-side"  className="w-10">
            <IoLogoGithub className="text-4xl" />
          </Link>
          <Link href={github} target="_blank" title="server-side"  className="w-10">
            <IoLogoGithub className="text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project2 = ({
  title,
  type,
  image,
  link,
  github,
  imageWidth,
  imageHeight,
  features,
  technologies,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative my-10">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-primary"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl my-3">{type}</span>
        <Link href={link} target="_blank" className="hover:underline">
          <h2 className="my-2 w-full text-left text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
        </Link>
        <div>
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc pl-5">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Technologies Used:</h3>
          <ul className="list-disc pl-5">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <IoLogoGithub className="text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      title: "Project 1 - MediStore",
      type: "Multi Vendor Medicine Store Website in React.Js",
      image: "/project1.png",
      link: "https://medistore-91753.web.app",
      github: "https://github.com/Nujat-Zaman-Chowdhury/MediStore-client",
      github: "https://github.com/Nujat-Zaman-Chowdhury/MediStore-server",
      imageWidth: 500,
      imageHeight: 400,
      summary: "A multi-vendor medicine store website with secure user login, real-time cart management, and comprehensive admin dashboard.",
      features: [
        "Secure Authentication: Implements JWT-based secure user login.",
        "Role-Based Control: Separate access levels for users, sellers, and admins.",
        "Real-Time Cart and Payment System: Integrated with Stripe for secure payments and real-time cart management.",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Stripe",
        "Tanstack Query",
      ],
    },
    {
      title: "Project 2 - SavorSafary",
      type: "Restaurant Management Website in React.Js",
      image: "/project2.png",
      link: "https://assignment-11-21ecc.web.app",
      github: "https://github.com/Nujat-Zaman-Chowdhury/savor-safary-client",
      imageWidth: 500,
      imageHeight: 400,
      summary: "SavorSafari is a restaurant management website designed to offer a seamless experience for managing and exploring food items. It provides users with personalized access to food categories and detailed item management.",
      features: [
        "Implemented secure login and sign-up functionality. Logged-in users can access personalized food items.",
        "Users can create, read, update, and delete food items.",
        "Accessible from any device, ensuring a seamless user experience.",
      ],
      technologies: ["React","Firebase","MongoDB","TailwindCSS","React Router Dom"],
    },
    {
      title: "Project 3 - Artisanal Crafts",
      type: "Art and Craft Store in React.Js",
      image: "/project3.png",
      link: "https://art-and-craft-4592e.web.app",
      github: "https://github.com/Nujat-Zaman-Chowdhury/art-and-craft-store-client",
      imageWidth: 500,
      imageHeight: 400,
      summary: "An online store for art and craft products with product browsing, secure checkout, and user account management.",
      features: [
        "Implemented authentication, to allow user login or sign up securely and access personalized features.",
        "Displayed a comprehensive database of listing art and crafts items.",
        "Providing List of categories, users can see categories according to subcategories.",
      ],
      technologies: ["React","Firebase","MongoDB","TailwindCSS","React Router Dom"],
    },
  ];

  return (
    <>
      <Head>
        <title>Nujat Portfolio | Projects Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <main className="w-full flex flex-col items-center justify-center container mx-auto">
        <div className="mb-10 lg:mb-16">
          <AnimatedText text="My Recent Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-24 lg:gap-y-32 p-3 lg:p-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-span-1 ${
                index === 0 ? "md:col-span-2 lg:col-span-4" : "md:col-span-1 lg:col-span-2"
              }`}
            >
              {index === 0 ? (
                <Project {...project} />
              ) : (
                <Project2 {...project} />
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
