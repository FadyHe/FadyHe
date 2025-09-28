import Section from './Section'
import { motion } from "motion/react";
import myPic from '../assets/me2.png'

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Section
      id="about"
      className='flex min-h-screen w-full flex-col py-16 mt-10'
    >
      <motion.hr
        className='bg-gradient-to-r from-transparent via-gray-900 dark:via-gray-300 to-transparent h-0.5 w-[80%] mx-auto'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <main className="flex-grow">
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex justify-center items-center flex-col lg:flex-row lg:items-center lg:space-x-16 gap-16"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {/* Image Section */}
              
                
              <motion.img
                variants={fadeInLeft}
                src={myPic}
                className='mx-auto relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105'
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 255, 0.2))',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 30px rgba(59, 130, 246, 0.4))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'drop-shadow(0 20px 40px rgba(0, 0, 255, 0.2))';
                }}
                alt="About me"
              />
                
              

              {/* Content Section */}
              <motion.div
                className="lg:col-span-3 max-w-2xl"
                variants={fadeInRight}
              >
                <motion.div
                  className="relative pl-8 mb-10 border-l-4 border-gradient-to-b from-primary to-purple-600"
                  style={{
                    borderImage: 'linear-gradient(to bottom, var(--primary), #9333ea) 1'
                  }}
                  
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b bg-primary rounded-full"></div>
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                    
                  >
                    About Me
                  </motion.h1>
                </motion.div>

                <motion.div
                  className="space-y-8 text-gray-600 dark:text-gray-300"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <motion.p
                    className="text-lg leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                    variants={fadeInUp}
                  >
                    My journey into web development began with a fascination for how websites are built. Starting with
                    basic HTML and CSS, I quickly became captivated by the power of
                    JavaScript to create dynamic and interactive user experiences. This led me to specialize in frontend
                    development, where I enjoy crafting visually appealing and
                    user-friendly interfaces.
                  </motion.p>

                  <motion.p
                    className="text-lg leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                    variants={fadeInUp}
                  >
                    My goal is to expand my skills into full-stack development, allowing me to contribute to all aspects
                    of web applications, from frontend design to backend logic and
                    database management. I am passionate about learning new technologies and applying them to solve
                    real-world problems, always striving to create efficient, scalable, and
                    maintainable code.
                  </motion.p>

                  <motion.p
                    className="text-lg leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                    variants={fadeInUp}
                  >
                    My portfolio showcases my projects and skills, reflecting my commitment to continuous improvement and
                    my enthusiasm for the ever-evolving field of web development.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                >
                  <motion.a
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary to-purple-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r to-primary opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      Contact Me
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </Section>
  )
}

export default About