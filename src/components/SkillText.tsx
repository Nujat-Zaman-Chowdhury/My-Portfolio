"use client"
import React from 'react';
import {motion} from "framer-motion"
// import { slideInFromRight } from '../utils/motion';
import AnimatedText from "../components/AnimatedText";

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>

<div className="mb-10 md:mb-16">
        <AnimatedText text="My Skills"/>
        </div>
        <motion.div
        initial={{
            opacity: 0,
            x: 50
        }}
        animate={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }}
        className='cursive text-[20px] text-primary-200 mb-10 mt-[10px] text-center  font-medium dark:text-slate-400'
        >
            Bring a strong foundation in modern web technologies and a passion for crafting responsive, user-friendly interfaces
        </motion.div> 
        </div>
    );
};

export default SkillText;