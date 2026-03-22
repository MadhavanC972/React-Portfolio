
import banner from '/green-bg.jpg';

import handimg from '/hero-hand.webp';

import { ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";



export const Hero = () => {


    return (
        <div>
            <div className="relative w-full h-screen px-2
                bg-[url('/bg-dark-green.jpg')] bg-cover bg-center
                flex items-center -mt-[70px]">

                <div className="absolute inset-0 bg-black/50 h-[100vh]"></div>

                <div className="w-full max-w-6xl mx-auto flex z-10">

                    <div className="w-1/2">

                    
                        <h2 className="text-2xl text-white font-semi font-[eb-garamond] py-4 flex items-center">
                            Hello There! <img src={handimg} />
                        </h2>
                        <motion.h1 initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, ease: "easeOut" }} className='text-6xl font-bold font-[DM Sans] text-white'>I am Madhavan</motion.h1>
                        <motion.h1 initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, ease: "easeOut" }} className='text-6xl font-bold font-[DM Sans] text-white py-5'>Web Developer</motion.h1>

                        <p className='font-[inter] text-[15px] text-white'>The combination of my passion for design, code &<br></br>
                            interaction web design world.</p>
                        <button className='bg-green-500 font-[inter] px-5 py-2 rounded text-white mt-6 flex items-center gap-2 hover:opacity-80'>Get in touch  <ArrowUpRight className='w-4 h-4' /></button>

                    </div>

                    <div className="w-1/2 text-white">

                    </div>

                </div>
            </div>

        </div>
    );
}