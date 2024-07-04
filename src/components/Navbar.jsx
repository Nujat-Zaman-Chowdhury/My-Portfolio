"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'; 
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { FacebookIcon, GithubIcon, InstaIcon } from './icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
    const pathName = usePathname();
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { 
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/About",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ];

    const renderLinks = (isMobile = false) => (
        <ul className={`${isMobile ? 'flex flex-col' : ''}`}>
            {links.map(link => (
                <Link
                    onClick={isMobile ? handleClick : null}
                    className={`mr-4 relative group`}
                    key={link.path} href={link.path}>
                    {link.title}
                    <span className={`h-[3px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                        ${pathName === link.path ? "w-full" : "w-0"}
                    `}>&nbsp;</span>
                </Link>
            ))}
        </ul>
    );

    const renderSocialIcons = () => (
        <nav className='flex gap-2'>
            <motion.a className='border border-dark rounded-full p-2' href="https://facebook.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <FacebookIcon />
            </motion.a>
            <motion.a className='border border-dark rounded-full p-2' href="https://github.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <GithubIcon />
            </motion.a>
            <motion.a className='border border-dark rounded-full p-2' href="https://instagram.com" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <InstaIcon />
            </motion.a>
            <button
                className='ml-3 flex items-center justify-center text-2xl rounded-full p-1 dark:text-primary'
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "dark" ? <IoMdSunny className={"fill-light"} /> : <IoMdMoon className='{"fill-dark dark:fill-primary"}' />}
            </button>
        </nav>
    );

    return (
        <header className='w-full px-3 md:px-20 lg:px-32 py-5 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light relative'>
            <button
                onClick={handleClick}
                className="flex-col justify-center items-center flex md:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-menu">
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <div className='w-full justify-between items-center hidden md:flex'>
                <nav className='flex items-center gap-4'>
                    <Logo />
                    {renderLinks()}
                </nav>
                {renderSocialIcons()}
            </div>

            {isOpen && (
                <div id="mobile-menu" className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-10'>
                    <nav className='flex flex-col items-center gap-4'>
                        <Logo />
                        {renderLinks(true)}
                    </nav>
                    <div className='mt-3'>
                        {renderSocialIcons()}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
