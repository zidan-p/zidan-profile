import { CertificateCard } from "@/entities/certification";





export default function Certificate(){
  return(
    <main>
      <section>
        <div className="mb-3">
          <h3 className='text-yellow-400 text-xl  font-semibold'>Project</h3>
          <p className='text-sm'>My project collection</p>
        </div>
      </section>
      <section>
        <div className="grid justify-between grid-cols-3 gap-6 mb-2">
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
          <CertificateCard credibility='' dateObtained='12 noverber' img='hello' name='java specialits' />
        </div>
      </section>
    </main>
  )
}