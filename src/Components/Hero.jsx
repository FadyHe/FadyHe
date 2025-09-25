import React, { useState } from 'react'
import { motion } from "motion/react"

function Hero() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 antialiased'>
      <main className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute top-1/2 -left-1/12 w-1/2 h-1/2 rounded-full sphere-gradient opacity-50 animate-float"></div><div className="absolute -top-1/4 -left-1/12 w-1/2 h-1/2 rounded-full sphere-gradient opacity-50 animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full sphere-gradient opacity-50 animate-float"
          style={{ animationDelay: '-3s' }}
        ></div>
        <div className="absolute inset-0 background-grid z-0"></div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent dark:from-background-dark z-10">
        </div>
        <div className="relative z-20 flex min-h-screen items-center justify-center p-4">
          <div className="mx-auto w-full max-w-4xl text-center">
            <div className="z-10 mb-8 transform transition-transform duration-500 ">
              <p className='text-5xl font-medium text-[#5e5ed1] mb-2'>I'm <span className='text-white'>Fady Helmy</span></p>
              <p className="text-lg font-medium text-[#5e5ed1] mb-2">Frontend Developer &amp; Aspiring Full-Stack Engineer</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-gray-900 dark:text-white">
                Transforming Ideas into 
                <div
                className='flex flex-col justify-center items-center mx-2'
                >
                  <p className='gradient-text z-10 relative relativegradient-line'>Interactive Realities&nbsp;</p>
                  <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" },
                    }}
                    className='underlined w-100 inline-block z-2 absolute -bottom-2'
                  ></motion.div>
                </div>
                
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12">
              I'm a Frontend Web Developer with a passion for creating intuitive and engaging user interfaces. My goal is to
              expand my expertise into Full Stack development, building robust and scalable web applications from concept to
              deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                initial={{y: 0}}
                animate={{ y: [0, -50 , 0]}}
                transition={{ease: "easeInOut" , repeat: Infinity, repeatDelay: 5, duration: 2}}

                className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1">
                Explore My Work
              </motion.button>
              <button
                className="bg-primary/10 dark:bg-primary/20 text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/20 dark:hover:bg-primary/30 transform hover:-translate-y-1 hover:text-white">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
