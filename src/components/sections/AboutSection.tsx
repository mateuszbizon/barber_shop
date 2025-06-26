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