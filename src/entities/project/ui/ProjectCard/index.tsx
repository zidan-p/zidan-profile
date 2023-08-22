import Image from "next/image";
import { Project } from "../../model/types";








export function ProjectCard (props: Project){
  return (
    <a href={props.url} className="border border-gray-200 p-2 rounded bg-white hover:bg-gray-200">
      <div className="">
        <h1 className="font-semibold">{props.name}</h1>
        <p className="text-sm font-light text-gray-700">{props.description}</p>
        <p>{props.stack}</p>
      </div>
      <Image className="mx-auto" src="/img/notFound.png" alt={props.name}  width={200} height={200}/>
    </a>
  )
}