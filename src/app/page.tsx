import Image from 'next/image'
import profileImage from "./asset/img/profile.png"
import GithubIcon from "./asset/icons/github.svg";
import FileTextIcon from "./asset/icons/fileText.svg";
import LinkedInIcon from "./asset/icons/linkedin.svg";
import Briefcase from "./asset/icons/briefcase.svg";
import Person from "./asset/icons/person.svg";
import { CertificateCard } from '@/entities/certification';
import Link from 'next/link';
import { ProjectCard } from '@/entities/project';

// data
import { projects } from '@/data/project';
import { certificates } from '@/data/certificate';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse gap-5  md:flex-row justify-between pb-4 border-b dark:border-b-gray-500">
        
        <div className="">
          <p>Hello there 👋, it&apos;s me</p>
          <h1 className='text-5xl font-bold text-gray-500 dark:text-gray-300'>
            <span className='text-yellow-400'>Zidan </span>
            Putra Rahman
          </h1>
          <p>A Web developer from East Java - Indonesia</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 mt-5">
            <a target="_blank" rel="noopener" href='https://github.com/zidan-p' className="inline-flex gap-1 items-center hover:underline">
              <GithubIcon />
              <span>Github</span>
            </a>
            <a target="_blank" rel="noopener" href='/asset/Zidan-Putra-Rahman_CV.pdf' className="inline-flex gap-1 items-center hover:underline">
              <FileTextIcon />
              <span>My CV (indonesian)</span>
            </a>
            <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/zidan-putra-rahman-546b6b232/' className="inline-flex gap-1 items-center hover:underline">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="">
          <Image className='' src={profileImage} alt='hello' placeholder='blur' width={170} height={158.8} />
        </div>
      </section>
      <section className='mt-6'>
        <p className='text-gray-700 dark:text-gray-300'>
          Fresh graduate from vocational school in software engineering major. I have Knowledge and Experience building Web Application, especially in Frontend Development.
        </p>
      </section>
      <section className='mt-10'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Experiences</h3>
          <p className='text-sm'>Wheter it&apos;s from internship, work or another activities</p>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex items-center">
            <div className="px-4">
              <Briefcase width={20} height={20} />
            </div>
            <div className="">
              <h2 className=' font-semibold'>FullStack freelance developer at Fixransomware</h2>
              <p className='text-sm font-light text-gray-700 dark:text-gray-400'>July 2023 - Now</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-4">
              <Person width={20} height={20} />
            </div>
            <div className="">
              <h2 className=' font-semibold'>Intern developer at Diskominfo Banyuwangi</h2>
              <p className='text-sm font-light text-gray-700 dark:text-gray-400'>June 2022 - November 2022</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Certification</h3>
          <p className='text-sm'>My certification for competency which I have mastered</p>
        </div>
        <div className="grid justify-between w-full grid-cols-1  md:grid-cols-3 gap-6 mb-2">
          {certificates.slice(0,3).map((certi, index) => (
            <CertificateCard 
              key={index}
              credibility={certi.credibility} 
              dateObtained={certi.dateObtained} 
              img={certi.img} 
              name={certi.name}
            />
          ))}
        </div>
        <div className="flex">
          <Link href="/certificate" className='border border-gray-200 rounded px-6 hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-500' >
            See more
          </Link>
        </div>
      </section>
      <section className='mt-16'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Project</h3>
          <p className='text-sm'>My project collection</p>
        </div>
        <div className="grid justify-between grid-cols-1  md:grid-cols-3 gap-6 mb-2">
          {projects.slice(0,3).map((project, index) => (
            <ProjectCard
              key={index}
              description={project.description}
              img={project.img}
              name={project.name}
              url={project.url}
              stack={project.stack}
            />
          ))}
        </div>
        <div className="flex">
          <Link href="/project" className='border border-gray-200 rounded px-6 hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-500' >
            See more
          </Link>
        </div>
      </section>
    </main>
  )
}
