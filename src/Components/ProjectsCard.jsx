import React, { useState } from 'react';
import { projects } from '../assets/projects.js';
import { motion } from "motion/react";
import { div } from 'motion/react-client';
import Modal from './Modal.jsx';

function ProjectsCard() {
  // Track which modal is open by index (null means no modal is open)
  const [openModalIndex, setOpenModalIndex] = useState(null);

  return (
    <div className='flex justify-center items-center mt-10'>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            key={index}
            className="group bg-white/5 dark:bg-[#06061a9b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-90"
          >
            <a
              href={project.link}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                setOpenModalIndex(index); // Open modal for this specific project
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative">
                <img src={project.img} alt={project.title} className="aspect-video object-cover w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </a>

            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold bg-primary/20 text-[#7c7ca2] px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Render modal outside the grid - only when a modal should be open */}
      {openModalIndex !== null && (
        <Modal
          onclose={() => setOpenModalIndex(null)}
          open={true}
        >
          <div>
            <h2 className="text-xl font-bold mb-3">{projects[openModalIndex].title}</h2>
            <img
              src={projects[openModalIndex].img}
              alt={projects[openModalIndex].title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">{projects[openModalIndex].desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[openModalIndex].techStack.map((tech, i) => (
                <span key={i} className="text-xs font-semibold bg-primary/20 text-[#7c7ca2] px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={projects[openModalIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors mr-4"
            >
              View Project
            </a>
            <a
              href={projects[openModalIndex].linkcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-white/50 text-black px-4 py-2 rounded transition-colors "
            >
              Source Code
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectsCard;