import React from 'react'
import Section from './Section'
import { hr } from 'motion/react-client'

function Skills() {
  return (
    <>
    <Section
    id="skills"
      className='flex min-h-screen w-full flex-col py-16 mt-10'
    >
        <hr className='bg-gray-900 h-0.5 w-[80%] mx-auto' />
      <main className="flex-1 px-4 py-8 md:px-10 lg:px-20 xl:px-40">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Skills &amp; Learning Journey</h1>
            <p className="mt-4 text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">A snapshot of my current technical
              abilities and the new skills I'm actively developing.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">layers</span>
                Frontend Stack
              </h2>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">HTML5 &amp; CSS3</h3>
                    <p className="text-sm text-black/50 dark:text-white/50">Expert</p>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{width: "95%"}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">JavaScript (ES6+)</h3>
                    <p className="text-sm text-black/50 dark:text-white/50">Advanced</p>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">React &amp; Next.js</h3>
                    <p className="text-sm text-black/50 dark:text-white/50">Advanced</p>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Tailwind CSS</h3>
                    <p className="text-sm text-black/50 dark:text-white/50">Expert</p>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{width: "98%"}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Git &amp; Version Control</h3>
                    <p className="text-sm text-black/50 dark:text-white/50">Proficient</p>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">trending_up</span>
                Learning Journey
              </h2>
              <div
                className="space-y-4 rounded-lg border border-black/10 dark:border-white/10 p-6 bg-primary/5 dark:bg-primary/10">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 learning-dot"></div>
                  <div>
                    <h3 className="font-semibold">Node.js &amp; Express</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">Building server-side logic and RESTful APIs for
                      full-stack applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 learning-dot"></div>
                  <div>
                    <h3 className="font-semibold">Databases (SQL &amp; NoSQL)</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">Exploring PostgreSQL and MongoDB to manage and
                      persist application data effectively.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 learning-dot"></div>
                  <div>
                    <h3 className="font-semibold">TypeScript</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">Adopting static typing to improve code quality and
                      maintainability in larger projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center border-t border-black/10 dark:border-white/10 pt-8">
            <p className="text-black/60 dark:text-white/60">Interested in the tools I use? Here's a more detailed list.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Figma</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">VS Code</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Vercel</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Webpack</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Jest</span><span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Adobe Photoshop</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/10">Adobe Illustrator</span>
            </div>
          </div>
        </div>
      </main>
    </Section>
    </>)
}

export default Skills
