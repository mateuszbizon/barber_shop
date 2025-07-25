"use client"

import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { LOGO } from '@/constants/images'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutSection() {
    useGSAP(() => {
        gsap.fromTo("#about-content", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                once: true
            }
        })
    }, [])

  return (
    <section id='about' className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>O nas</h2>
            <div id='about-content' className='grid md:grid-cols-2 gap-10'>
                <div>
                    <figure className='relative w-1/2 aspect-square mx-auto'>
                        <Image src={LOGO.src} alt={LOGO.alt} fill />
                    </figure>
                </div>

                <div className='text-pretty bigger-text leading-normal space-y-5'>
                    <p>
                        Nasz salon powstał z miłości do piękna i sztuki fryzjerskiej. Codziennie dbamy o to, by nasi klienci wychodzili od nas z uśmiechem i fryzurą, która podkreśla ich styl.
                    </p>
                    <p>
                        Łączymy doświadczenie z najnowszymi trendami. Niezależnie od tego, czy szukasz klasycznego cięcia, nowoczesnej koloryzacji, czy odświeżenia wizerunku — jesteśmy tutaj dla Ciebie.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection