import Image from "next/image";
import { Certificate } from "../../model/types";








export function CertificateCard (props: Certificate){
  return (
    <a href={props.credibility} className="border border-gray-200 p-2 rounded bg-white hover:bg-gray-200">
      <Image src="/img/notFound.png" alt={props.name}  width={200} height={200}/>
      <div className="">
        <h1 className="font-semibold">{props.name}</h1>
        <p className="text-sm font-light text-gray-700">{props.dateObtained}</p>
      </div>
    </a>
  )
}