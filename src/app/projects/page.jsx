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

const Project2 = ({
  title,
  type,
  image,
  link,
  github,
  imageWidth,
  imageHeight,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
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
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <Project
              title="Project 1 - MediStore"
              summary="Implemented secure user login with JWT based authentication. Role based control for users, sellers and admins. Involved real time cart managements and payments system using stripe with secured system. User has access to download their invoice generation. Users can search, sort and filter their products listings. Category-wise product display with a modal for detailed view. Comprehensive admin dashboard for managing users, categories, payments, and advertisements. Admin has access to give any user seller or user role. Efficient data fetching and caching with Tanstack Query operations."
              type="Multi Vendor Medicine Store Website in React.Js"
              image="/project1.png"
              imageWidth={500}
              imageHeight={400}
              github="https://github.com/Nujat-Zaman-Chowdhury/MediStore-client"
              link="https://medistore-91753.web.app"
            />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Project2
              title="Project 2 - SavorSafary"
              type="Restaurant Management Website in React.Js"
              image="/project2.png"
              imageWidth={500}
              imageHeight={400}
              github="https://github.com/Nujat-Zaman-Chowdhury/savor-safary-client"
              link="https://assignment-11-21ecc.web.app"
            />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Project2
              title="Project 3 - Artisanal Crafts"
              type="Art and Craft Store in React.Js"
              image="/project3.png"
              imageWidth={500}
              imageHeight={400}
              github="https://github.com/Nujat-Zaman-Chowdhury/art-and-craft-store-client"
              link="https://art-and-craft-4592e.web.app"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
