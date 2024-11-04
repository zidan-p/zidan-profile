import Image from "next/image";
import { Project } from "../../model/types";








export function ProjectCard (props: Project){
  return (
    <a target="_blank" href={props.url} className="border flex flex-col border-gray-200 p-2 rounded bg-white hover:bg-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-500">
      <div className="flex-grow">
        <h1 className="font-semibold text-black dark:text-gray-300">{props.name}</h1>
        <p className="text-sm font-light text-gray-700 dark:text-gray-400">{props.description}</p>
        <p>{props.stack}</p>
      </div>
      <div className="w-full relative min-h-[120px]">
        <Image fill sizes="200px" className="mx-auto object-cover w-full" src="/img/notFound.png" alt={props.name} />
      </div>
    </a>
  )
}