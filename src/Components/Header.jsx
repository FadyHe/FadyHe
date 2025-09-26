import React, { useState } from 'react';
import Section from './Section';
import { Logo } from '../assets/SVGs/Logo';
import { Git } from '../assets/SVGs/Git';
import { Linkedin } from '../assets/SVGs/Linkedin';
import { motion } from 'framer-motion';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <Section
      id='projects'
      customPaddings=''
      className='bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700'>
      <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      animate={{ transition: { duration: 4 } , ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 text-primary">
                <Logo />
              </div>
              <a href="#hero"><h2 className="text-xl font-bold text-gray-900 dark:text-white">Fady's Portfolio</h2></a>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
                <a className="text-sm font-medium text-primary" href="#projects">Projects</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
              </nav>

              
              <div className="flex items-center gap-2">
                <a className="p-2 rounded-full hover:bg-primary/20 transition-colors" href="https://github.com/FadyHe" target="_blank">
                  <Git />
                </a>
                <a className="p-2 rounded-full hover:bg-primary/20 transition-colors" href="https://www.linkedin.com/in/fady-helmy-fh/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            <nav className='md:hidden'>
              <div role="navigation" onClick={toggleMenu}>
                <div id="nav-icon3" className={isOpen ? 'open' : ''}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {isOpen && (
                <ul className='absolute top-16 right-0.5 py-3 bg-background-light dark:bg-background-dark shadow-lg rounded-md px-4 justify-center items-center flex flex-col gap-5 transition-opacity '>
                  <li><a onClick={handleLinkClick} className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a></li>
                  <li><a onClick={handleLinkClick} className="text-sm font-medium text-primary" href="#projects">Projects</a></li>
                  <li><a onClick={handleLinkClick} className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a></li>
                </ul>
              )}
            </nav>

            </div>
          </div>
        </div>
      </motion.header>
      </Section>
  )
}

export default Header;