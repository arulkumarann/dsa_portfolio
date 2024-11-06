'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


import { Card, CardContent, Badge, Button } from '@mui/material';

import Image from 'next/image'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'journey', title: 'Journey' },
    { id: 'elab', title: 'eLab' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <nav className="sticky top-0 z-10 bg-gray-900 py-4 mb-8">
        <ul className="flex justify-center space-x-4 overflow-x-auto">
          {sections.map((section) => (
            <li key={section.id}>
              <Button
                variant="ghost"
                className={`text-sm transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'text-purple-400 bg-gray-800' 
                    : 'text-gray-400 hover:text-pink-400 hover:bg-gray-800'
                }`}
                onClick={() => {
                  setActiveSection(section.id)
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto">
        <motion.header 
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Image
            src="/profile.png"
            alt="Arul Kumaran"
            width={160}
            height={160}
            className="mx-auto rounded-full mb-6 border-2 border-purple-500"
          />
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
    Arul Kumaran
  </h1>
  <p className="text-xl text-gray-400 mb-6">DSA Enthusiast & Software Engineer</p>
  <div className="flex justify-center space-x-4">
    <a href="https://github.com/arulkumarann" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="rounded-full bg-gray-900 hover:bg-gray-800 border-gray-700 hover:border-purple-500">
        <FaGithub className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/arul-kumaran-p" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="rounded-full bg-gray-900 hover:bg-gray-800 border-gray-700 hover:border-purple-500">
        <FaLinkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Button>
    </a>
    <a href="mailto:arulkumaranp02@gmail.com" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="rounded-full bg-gray-900 hover:bg-gray-800 border-gray-700 hover:border-purple-500">
        <FaEnvelope className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Button>
    </a>
    
  </div>
</motion.header>

        <motion.section 
          id="about"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate software engineer with a strong focus on Data Structures and Algorithms. 
                My journey in DSA has been both challenging and rewarding, shaping me into a problem-solver 
                who thrives on optimizing code and tackling complex computational challenges.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          id="skills"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Data Structures', 'Algorithms', 'Problem Solving', 'Time Complexity Analysis', 'Space Complexity Analysis', 'Dynamic Programming', 'Graph Algorithms', 'Sorting Algorithms', 'Searching Algorithms', 'Tree Traversals', 'Hashing'].map((skill) => (
              <motion.div 
                key={skill} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="w-full py-2 text-sm bg-gray-800 hover:bg-gray-700 text-purple-300 border border-purple-500">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="projects"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Projects</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Shortest Path Finder</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <Image
                    src="/dsa_spf.png"
                    alt="Shortest Path Finder Screenshot"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg border border-purple-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-300 mb-4">
                    The Shortest Path Finder is an interactive web application that demonstrates the power of graph algorithms in solving real-world problems. This project showcases my proficiency in implementing complex data structures and algorithms.
                  </p>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Interactive grid-based interface for creating start, end, and obstacle points</li>
                    <li>Implementation of Dijkstra's algorithm for finding the shortest path</li>
                    <li>Visual representation of the algorithm's progress in real-time</li>
                    <li>Ability to generate random mazes for diverse problem scenarios</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['DSA','HTML5 Canvas', 'CSS3'].map((tech) => (
                      <Badge key={tech} className="bg-gray-800 text-purple-300 border border-purple-500">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          id="journey"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Learning Journey</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="relative">
                {['Foundations', 'Practice & Application', 'Advanced Concepts', 'Real-world Projects'].map((stage, index) => (
                  <div key={stage} className="flex items-start mb-8 last:mb-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-pink-400">{stage}</h3>
                      <p className="text-gray-300">{getJourneyDescription(stage)}</p>
                    </div>
                    {index < 3 && (
                      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-purple-500" style={{ height: 'calc(100% - 2rem)' }} />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          id="elab"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">elab Problem Solving</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <p className="text-gray-300 mb-4">
                    Throughout my college journey, I honed my DSA skills by solving a wide range of problems on elab, 
                    our college's programming platform. This experience was crucial in developing my algorithmic thinking 
                    and coding proficiency.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-pink-400">Problems Solved</h3>
                      <p className="text-gray-300">Successfully completed over 30 DSA problems on elab</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-pink-400">Key Achievements</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Achieved 100% completion rate in Data Structures module</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-pink-400">Impact</h3>
                      <p className="text-gray-300">
                        This intensive problem-solving experience on elab significantly improved my ability to analyze, 
                        design, and implement efficient algorithms, preparing me for real-world software engineering challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/dsa_elab.png"
                    alt="elab Problem Solving Statistics"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg border border-purple-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          id="experience"
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Internship Experience</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Software Engineer Intern</h3>
              <p className="text-gray-400 mb-4">C4Scale Inc. | Oct 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Implemented efficient algorithms for data processing, reducing runtime by 40%</li>
                <li>Conducted research on prompt security in large language models (LLMs), focusing on safeguarding against
                adversarial and injection attacks.</li>
                <li>Developed secure prompting strategies to mitigate risks and enhance the robustness of LLM-based systems.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          id="education"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">Education</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Bachelor of Science in Computer Science w/s AIML</h3>
              <p className="text-gray-400 mb-2">SRM UNIVERSITY | 2023 - 2027</p>
              <p className="text-gray-300">
                Relevant Coursework: Data Structures, Algorithms, 
           Database Systems
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

function getJourneyDescription(stage: string) {
  switch (stage) {
    case 'Foundations':
      return 'Mastered basic data structures and algorithms in college courses'
    case 'Practice & Application':
      return 'Solved numerous problems on elab, strengthening problem-solving skills'
    case 'Advanced Concepts':
      return 'Delved into advanced algorithms and optimization techniques'
    case 'Real-world Projects':
      return 'Applied DSA knowledge in internships and personal projects'
    default:
      return ''
  }
}