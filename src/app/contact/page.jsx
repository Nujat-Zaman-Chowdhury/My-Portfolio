
"use client"
import Image from 'next/image';
import React from 'react';
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const ContactPage = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_otbk50h', 'template_kdw47gu', e.target,'Cf7nqkjk-8aq-jn2I')
            .then((result) => {
                console.log(result.text);
                toast.success("Send Successfully")

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='flex flex-col-reverse lg:flex-row items-center lg:justify-evenly my-6'>
            <form action="" onSubmit={sendEmail} className='flex flex-col md:items-start gap-8'>
                <div>
                    <h2 className='font-semibold text-3xl mb-4 dark:text-light'>Get in touch</h2>
                    <h4 className='font-medium text-dark dark:text-light'>Email : <span className='text-primary/70'>nujattazin@gmail.com</span></h4>
                    <Link href="https://github.com/Nujat-Zaman-Chowdhury" className='font-medium text-dark dark:text-light hover:text-primary'>Github</Link>
                    <hr className="w-full md:w-[120px] h-[5px] bg-primary rounded-[10px] my-2" />
                </div>
                <input className="md:w-[400px] h-[50px] border border-dark outline-none pl-6 font-medium text-gray-500 rounded-full focus:outline-primary focus:border-none focus:shadow-slate-950" type="text" name="name" id="" placeholder='Your name' required />
                <input className="md:w-[400px] h-[50px] border border-dark outline-none pl-6 font-medium text-gray-500 rounded-full focus:outline-primary focus:border-none focus:shadow-slate-950" type="email" name="email" id="" placeholder='Your email' required />
                <textarea className='h-[140px] md:w-[400px] pt-4 p-4 outline-none pl-6 font-medium text-gray-500 border border-dark rounded-md focus:outline-primary focus:border-none focus:shadow-slate-950' name='message' placeholder='Your message' required></textarea>
                <button className='flex items-center justify-center p-3 border border-dark text-base text-primary dark:bg-white rounded-md bg-dark shadow-md' type="submit">Submit</button>
            </form>
            <div>
                <Image src="/contact.png" alt="nujat" width={400} height={400} />
            </div>
            <Toaster />
        </div>
    );
};

export default ContactPage;
