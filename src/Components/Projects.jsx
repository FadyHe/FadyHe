import React from 'react'
import Section from './Section'
import Header from './Header'
import ProjectsCard from './ProjectsCard'

function Projects() {
  return (
    <>
    <Section 
        id='projects'
      className='g-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 py-10'>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mx-12"><br /><br /><br />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white ">Projects</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A selection of my recent work, showcasing my skills
            in frontend development and my journey towards becoming a full-stack developer.</p>
        </div>
      </div>
      <ProjectsCard />
    </Section>
    </>
  )
}

export default Projects
