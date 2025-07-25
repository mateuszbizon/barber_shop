import React from 'react'
import Container from '../ui/container'
import { Activity, Brush, Droplet, Palette, Scissors, Wind } from 'lucide-react'

function ServiceSection() {
  return (
    <section className='py-section-padding bg-accent/50'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Nasze usługi</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                <div className='service-card'>
                    <Scissors className='size-10 mx-auto' />
                    <h3 className='heading3'>Strzyżenie klasyczne</h3>
                    <p className='text-lg'>
                        Precyzyjne cięcie dopasowane do kształtu twarzy i indywidualnych preferencji. Stylizacja, która podkreśla Twój charakter.
                    </p>
                </div>

                <div className='service-card'>
                    <Palette className='size-10 mx-auto' />
                    <h3 className='heading3'>Koloryzacja włosów</h3>
                    <p className='text-lg'>
                        Profesjonalna koloryzacja z użyciem wysokiej jakości farb. Odcień, który doda świeżości i wyrazistości Twojemu wizerunkowi.
                    </p>
                </div>

                <div className='service-card'>
                    <Droplet className='size-10 mx-auto' />
                    <h3 className='heading3'>Regeneracja i pielęgnacja</h3>
                    <p className='text-lg'>
                        Zabiegi odbudowujące strukturę włosa i poprawiające kondycję skóry głowy. Idealne po intensywnych stylizacjach lub koloryzacji.
                    </p>
                </div>
                
                <div className='service-card'>
                    <Wind className='size-10 mx-auto' />
                    <h3 className='heading3'>Modelowanie i stylizacja</h3>
                    <p className='text-lg'>
                        Fryzura na co dzień lub na wyjątkową okazję. Tworzymy styl, który utrzyma się przez cały dzień (i noc).
                    </p>
                </div>

                <div className='service-card'>
                    <Activity className='size-10 mx-auto' />
                    <h3 className='heading3'>Strzyżenie maszynką</h3>
                    <p className='text-lg'>
                        Szybkie i dokładne cięcie maszynką — od klasycznych długości po modne wycieniowania i fade’y.
                    </p>
                </div>

                <div className='service-card'>
                    <Brush className='size-10 mx-auto' />
                    <h3 className='heading3'>Stylizacja brody i wąsów</h3>
                    <p className='text-lg'>
                        Zadbana broda to podstawa – przycinanie, konturowanie i pielęgnacja, które nadadzą jej odpowiedni kształt i świeżość.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ServiceSection