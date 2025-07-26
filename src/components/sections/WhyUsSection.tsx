import React from 'react'
import Container from '../ui/container'
import { Star } from 'lucide-react'

function WhyUsSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Dlaczego warto wybrać nas?</h2>
            <div className='bg-background2 rounded-2xl p-10 space-y-15'>
                <p className='text-center bigger-text'>
                    Jesteśmy zespołem doświadczonych profesjonalistów, którzy zawsze stawiają na jakość i satysfakcję klienta. Nasze usługi są dostosowane do indywidualnych potrzeb, a nasza pasja do tego, co robimy, sprawia, że jesteśmy liderami w branży.
                </p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center'>
                    <div className='space-y-5'>
                        <Star className='size-10 mx-auto text-orange-300 fill-orange-300' />
                        <h3 className='heading3 md:h-[72px] xl:h-[120px]'>Doświadczeni styliści</h3>
                        <p className='little-bigger-text'>
                            Nasz zespół to profesjonaliści z pasją i wieloletnim doświadczeniem, którzy znają się na trendach i klasyce.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Star className='size-10 mx-auto text-orange-300 fill-orange-300' />
                        <h3 className='heading3 md:h-[72px] xl:h-[120px]'>Indywidualne podejście</h3>
                        <p className='little-bigger-text'>
                            Każdego klienta traktujemy wyjątkowo – dopasowujemy fryzurę do stylu życia, osobowości i oczekiwań.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Star className='size-10 mx-auto text-orange-300 fill-orange-300' />
                        <h3 className='heading3 md:h-[72px] xl:h-[120px]'>Wysokiej jakości kosmetyki</h3>
                        <p className='little-bigger-text'>
                            Pracujemy na sprawdzonych i bezpiecznych produktach, które dbają o zdrowie Twoich włosów i skóry głowy.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Star className='size-10 mx-auto text-orange-300 fill-orange-300' />
                        <h3 className='heading3 md:h-[72px] xl:h-[120px]'>Komfortowa atmosfera</h3>
                        <p className='little-bigger-text'>
                            Zapewniamy przyjazne i relaksujące wnętrze, w którym poczujesz się swobodnie – od pierwszej wizyty.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUsSection