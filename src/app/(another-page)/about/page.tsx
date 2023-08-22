import Image from "next/image";
import ProfileImage from "./../../asset/img/profile.png";



export default function About(){
  return(
    <main>
      <section>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>About</h3>
          <h1 className='text-3xl font-bold text-gray-600'>Me, Zidan Putra Rahman</h1>
        </div>
        <div className="">
          <p>
            Hi, I am Zidan, A fresh graduate student from vocational high school from SMKS Telkom Sandhy Putra Malang. I Have some knowledges and experiences building web app from my school. 
          </p>
          <p>
            At first, When I was just starting my education in high school (maybe june 2020?), I didn’t know anything about programing beside how to write website with html. starting from that time, I gradually learn how to code with general instruction structure like looping, function, variable etc. Although the language i wrote my code is different, the general logic still the same.  
          </p>
          <p>
            Now I already knew and have experience with web development, whether it’s in frontend or backend. Currently I want to learn java in game development while expanding my knowledge in web development.
          </p>
        </div>
      </section>
    </main>
  )
}