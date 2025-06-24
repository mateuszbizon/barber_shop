import React from 'react'
import Container from '../ui/container'
import { Scissors, ScissorsLineDashed, SoapDispenserDroplet } from 'lucide-react'

function ServiceSection() {
  return (
    <section className='py-section-padding bg-accent/50'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Nasze usługi</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                <div className='service-card'>
                    <Scissors className='size-10 mx-auto' />
                    <h3 className='heading3'>Strzyżenie</h3>
                    <p className='text-lg'>
                        Precyzyjne cięcie dopasowane do kształtu twarzy, rodzaju włosów i Twojego stylu. Klasyczne lub nowoczesne fryzury – zawsze z charakterem.
                    </p>
                </div>

                <div className='service-card'>
                    <ScissorsLineDashed className='size-10 mx-auto' />
                    <h3 className='heading3'>Strzyżenie brody</h3>
                    <p className='text-lg'>
                        Profesjonalne formowanie, konturowanie i stylizacja brody. Niezależnie od długości – nadamy jej odpowiedni kształt i zadbamy o każdy szczegół.
                    </p>
                </div>

                <div className='service-card'>
                    <SoapDispenserDroplet className='size-10 mx-auto' />
                    <h3 className='heading3'>Pielęgnacja brody</h3>
                    <p className='text-lg'>
                        Kompleksowa regeneracja brody i skóry twarzy – peeling, odżywienie i masaż. Idealne dla mężczyzn, którzy traktują swoją brodę poważnie.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ServiceSection