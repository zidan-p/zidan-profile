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

export default function Home() {
  return (
    <main>
      <section className="flex justify-between pb-4 border-b">
        <div className="">
          <p>Hello there 👋, it's me</p>
          <h1 className='text-5xl font-bold text-gray-500'>
            <span className='text-yellow-400'>Zidan </span>
            Putra Rahman
          </h1>
          <p>A Web developer from East Java - Indonesia</p>
          <div className="flex gap-8 mt-5">
            <a href='https://github.com/zidan-p' className="inline-flex gap-1 items-center hover:underline">
              <GithubIcon />
              <span>Github</span>
            </a>
            <a href='#' className="inline-flex gap-1 items-center hover:underline">
              <FileTextIcon />
              <span>My Resume</span>
            </a>
            <a href='https://www.linkedin.com/in/zidan-putra-rahman-546b6b232/' className="inline-flex gap-1 items-center hover:underline">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="">
          <Image src={profileImage} alt='hello' placeholder='blur' width={170} height={158.8} />
        </div>
      </section>
      <section className='mt-6'>
        <p className='text-gray-700'>
          Fresh graduate from vocational school in software engineering major. I have Knowledge and Experience building Web Application, especially in Frontend Development.
        </p>
      </section>
      <section className='mt-10'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Experiences</h3>
          <p className='text-sm'>Wheter it's from internship, work or another activities</p>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex items-center">
            <div className="px-4">
              <Briefcase width={20} height={20} />
            </div>
            <div className="">
              <h2 className=' font-semibold'>FullStack freelance developer at Fixransomware</h2>
              <p className='text-sm font-light text-gray-700'>July 2023 - Now</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-4">
              <Person width={20} height={20} />
            </div>
            <div className="">
              <h2 className=' font-semibold'>Intern developer at Diskominfo Banyuwangi</h2>
              <p className='text-sm font-light text-gray-700'>June 2022 - November 2022</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Certification</h3>
          <p className='text-sm'>My certification for competency which I have mastered</p>
        </div>
        <div className="flex justify-between mb-2">
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
        </div>
        <div className="flex">
          <Link href="/certification" className='border rounded px-6 hover:bg-gray-200' >
            See more
          </Link>
        </div>
      </section>
      <section className='mt-16'>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Project</h3>
          <p className='text-sm'>My project collection</p>
        </div>
        <div className="grid justify-between grid-cols-3 gap-6 mb-2">
          <ProjectCard 
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
            img=''
            name='Project bagus'
            url=''
            stack={["hello", "wolrd"]}
          />
          <ProjectCard 
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
            img=''
            name='Project bagus'
            url=''
            stack={["hello", "wolrd"]}
          />
          <ProjectCard 
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
            img=''
            name='Project bagus'
            url=''
            stack={["hello", "wolrd"]}
          />
        </div>
        <div className="flex">
          <Link href="/project" className='border rounded px-6 hover:bg-gray-200' >
            See more
          </Link>
        </div>
      </section>
    </main>
  )
}
