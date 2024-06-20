"use client"
import React from 'react';
import {motion} from "framer-motion"
const TransitionEffect = () => {
    return (
        <>
            <motion.div
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            transition={{duration:0.8 , ease:"easeInOut"}}
            className='flex top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary'></motion.div>
            <motion.div
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            transition={{duration:0.8 , ease:"easeInOut",delay:0.2}}
            className='flex top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'></motion.div>
            <motion.div
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%", width:"0%"}}
            transition={{duration:0.8 , ease:"easeInOut",delay:0.4}}
            className='flex top-0 bottom-0 right-full w-screen h-screen z-10 bg-bg-dark'></motion.div>
        </>
    );
};

export default TransitionEffect;