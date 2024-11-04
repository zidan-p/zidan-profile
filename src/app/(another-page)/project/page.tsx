import { ProjectCard } from "@/entities/project";
import { projects } from "@/data/project";



export default function Project(){
  return(
    <main>
      <section>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Project</h3>
          <p className='text-sm'>My project collection</p>
        </div>
      </section>
      <section>
        <div className="grid justify-between  grid-cols-1 md:grid-cols-3  gap-6 mb-2">
          {projects.map((project, index) => (
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
      </section>
    </main>
  )
}