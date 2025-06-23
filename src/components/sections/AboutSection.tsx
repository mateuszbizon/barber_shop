import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { IMAGES } from '@/constants/images'

function AboutSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>O nas</h2>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <figure className='relative w-1/2 aspect-square mx-auto'>
                        <Image src={IMAGES[0].src} alt={IMAGES[0].alt} fill />
                    </figure>
                </div>

                <div className='text-pretty bigger-text text-center leading-normal space-y-5'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt esse consequatur aliquid. Expedita voluptatem, placeat excepturi consequuntur aliquid ad nobis voluptate laudantium eligendi repudiandae ipsam aliquam maxime odio nulla quisquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam fugit maiores, praesentium nemo deserunt voluptate recusandae quae. Libero cumque laboriosam vitae molestias accusamus quis, earum repudiandae perferendis non quibusdam.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection