import Image from "next/image";
import { Certificate } from "../../model/types";








export function CertificateCard (props: Certificate){
  return (
    <a target="_blank" href={props.credibility} className="border border-gray-200 p-2 rounded bg-white hover:bg-gray-200">
      <div className="w-full relative min-h-[120px]">
        <Image  fill sizes="200px"  src={ props.img ? props.img : "/img/notFound.png"} className="mx-auto object-contain" alt={props.name} />
      </div>
      <div className="">
        <h1 className="font-semibold">{props.name}</h1>
        <p className="text-sm font-light text-gray-700">{props.dateObtained}</p>
      </div>
    </a>
  )
}