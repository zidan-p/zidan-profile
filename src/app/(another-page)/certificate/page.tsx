import { CertificateCard } from "@/entities/certification";
import { certificates } from "@/data/certificate";




export default function Certificate(){
  return(
    <main>
      <section>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Certificate</h3>
          <p className='text-sm'>My certification for competency which I have mastered</p>
        </div>
      </section>
      <section>
        <div className="grid justify-between grid-cols-1 md:grid-cols-3 gap-6 mb-2">
          {certificates.map((certi, index) => (
            <CertificateCard 
              key={index}
              credibility={certi.credibility} 
              dateObtained={certi.dateObtained} 
              img={certi.img} 
              name={certi.name}
            />
          ))}
        </div>
      </section>
    </main>
  )
}