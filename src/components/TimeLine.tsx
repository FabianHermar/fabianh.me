'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MessageSquare, Code, Database, Server, Cpu, Terminal } from 'lucide-react'

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
}

const experienceData: TimelineItem[] = [
  {
    title: "Computer Science Educator for Kids and Teens",
    company: "Codelearn",
    period: "November 2021 - May 2024",
    description: [
      "\"There's no better way to learn than to teach\"",
      "Weekly guided 20+ students through a broad range of computer science topics ranging from basic programming to advanced subjects such as Python, JavaScript, SQL, C++, and many more. My role involved helping the students navigate various courses available on an internal e-learning platform, providing assistance with challenges and ensuring an optimal use of the interactive learning tools available.",
      "Participated in extracurricular teaching at local schools and received positive parental feedback, as a result of an improvement in their children's academic performance."
    ],
    skills: ["Communication", "Python", "JavaScript", "Bash", "C++"]
  },
  {
    title: "Full Stack Developer",
    company: "TechInnovate",
    period: "June 2020 - October 2021",
    description: [
      "Developed and maintained web applications using React, Node.js, and PostgreSQL.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Collaborated with the UX team to improve user interface and experience."
    ],
    skills: ["React", "Node.js", "PostgreSQL", "RESTful APIs", "Git"]
  },
  {
    title: "Junior Software Engineer",
    company: "DataSys Solutions",
    period: "January 2019 - May 2020",
    description: [
      "Assisted in the development of data processing systems using Python and SQL.",
      "Participated in code reviews and contributed to improving coding standards.",
      "Worked on optimizing database queries for better performance."
    ],
    skills: ["Python", "SQL", "Data Processing", "Agile Methodologies"]
  },
  {
    title: "IT Support Intern",
    company: "GlobalTech Industries",
    period: "June 2018 - December 2018",
    description: [
      "Provided technical support to employees, resolving hardware and software issues.",
      "Assisted in maintaining and updating IT infrastructure documentation.",
      "Participated in the implementation of a new ticketing system for IT requests."
    ],
    skills: ["Technical Support", "Troubleshooting", "IT Infrastructure", "Customer Service"]
  }
]

export default function ExperienceTimeline() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const maxScroll = documentHeight - windowHeight
      const currentProgress = (scrollTop / maxScroll) * 100
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700">
          <div 
            className="absolute top-0 left-0 w-full bg-yellow-500 transition-all duration-300 ease-out"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
        {experienceData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item }: { item: TimelineItem }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`mb-16 pl-12 relative transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute left-4 top-6 w-8 h-8 bg-gray-900 rounded-full border-4 border-yellow-500 transform -translate-x-1/2 z-10"></div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-500 flex items-center">
          {item.title}
          <ArrowUpRight className="ml-2" size={20} />
        </h2>
        <h3 className="text-xl text-yellow-400 mt-1">{item.company}</h3>
        <p className="text-gray-500 mt-1">{item.period}</p>
        {item.description.map((desc, index) => (
          <p key={index} className={`mt-4 ${index === 0 && item.company === "Codelearn" ? 'text-xl italic' : ''}`}>
            {desc}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {getSkillIcon(skill)}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function getSkillIcon(skill: string) {
  switch (skill.toLowerCase()) {
    case 'communication':
      return <MessageSquare className="mr-1" size={16} />
    case 'python':
      return <Code className="mr-1" size={16} />
    case 'javascript':
      return <Code className="mr-1" size={16} />
    case 'bash':
      return <Terminal className="mr-1" size={16} />
    case 'c++':
      return <Cpu className="mr-1" size={16} />
    case 'react':
      return <Code className="mr-1" size={16} />
    case 'node.js':
      return <Server className="mr-1" size={16} />
    case 'postgresql':
    case 'sql':
      return <Database className="mr-1" size={16} />
    default:
      return null
  }
}