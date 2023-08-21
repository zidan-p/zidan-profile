import Image from 'next/image'
import profileImage from "./asset/img/profile.png"
import GithubIcon from "./asset/icons/github.svg";
import FileTextIcon from "./asset/icons/fileText.svg";
import LinkedInIcon from "./asset/icons/linkedin.svg";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between">
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
        <hr className='mt-6' />
      <section className='mt-6'>
        <p className=''>
          Fresh graduate from vocational school in software engineering major. I have Knowledge and Experience building Web Application, especially in Frontend Development.
        </p>
      </section>
      <section className='mt-4'>
        <h3 className='text-yellow-400 font-semibold'>Experiences</h3>
        <p className='text-sm'>Wheter it's from internship, work or another activities</p>
      </section>
    </main>
  )
}
