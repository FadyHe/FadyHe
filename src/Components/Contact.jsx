import React from 'react'
import Section from './Section'
import { Linkedin2 } from '../assets/SVGs/Linkedin2'
import { Github } from '../assets/SVGs/Github'
import {Download} from '../assets/SVGs/Download'
import Email from '../assets/SVGs/Email'

function Contact() {
  return (
    <Section
      id="contact"
      className='font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200'
    >
      <hr className='bg-gray-900 h-0.5 w-[80%] mx-auto' />
      <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">I'm always open to discussing new projects, creative ideas, or just a friendly chat. Feel free to reach out through any of the channels below.</p>
        </div>
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a className="group flex flex-col items-center justify-center space-y-3 rounded-xl bg-background-light/50 p-6 text-center transition-all duration-300 hover:bg-primary/10 dark:bg-background-dark/50 dark:hover:bg-primary/20" href="https://github.com/FadyHe" target="_blank">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <Github />
            </div>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">GitHub</p>
          </a>
          <a className="group flex flex-col items-center justify-center space-y-3 rounded-xl bg-background-light/50 p-6 text-center transition-all duration-300 hover:bg-primary/10 dark:bg-background-dark/50 dark:hover:bg-primary/20" href="https://www.linkedin.com/in/fady-helmy-fh/" target="_blank">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <Linkedin2 />
            </div>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">LinkedIn</p>
          </a>
          <a className="group flex flex-col items-center justify-center space-y-3 rounded-xl bg-background-light/50 p-6 text-center transition-all duration-300 hover:bg-primary/10 dark:bg-background-dark/50 dark:hover:bg-primary/20" href="mailto:helmysaman8@gmail.com?subject=Portfolio%20Contact&body=Hi%20Helmy,%0A%0AI%20found%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20project%20or%20opportunity.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20connect.%0A%0ABest%20regards">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined !text-4xl"> 
                <Email /> </span>
            </div>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">Email</p>
          </a>
          <a className="group flex flex-col items-center justify-center space-y-3 rounded-xl bg-background-light/50 p-6 text-center transition-all duration-300 hover:bg-primary/10 dark:bg-background-dark/50 dark:hover:bg-primary/20" download="Fady Helmy" href="../assets/Resume.pdf">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined !text-4xl">
                <Download />
                </span>
            </div>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">Resume</p>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Contact
