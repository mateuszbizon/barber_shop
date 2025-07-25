"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Shadow from '../ui/shadow'
import { HERO_IMAGE } from '@/constants/images'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function HeroSection() {
    useGSAP(() => {
        gsap.fromTo(".text-animate", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
        })
    }, [])

  return (
    <header id='header' style={{ backgroundImage: `url(${HERO_IMAGE.src})` }} className='header-section-height z-0 relative bg-cover bg-center bg-no-repeat'>
        <Shadow />
        <Container>
            <div className='flex flex-col justify-center gap-5 md:gap-10 h-full'>
                <h1 className='text-animate heading1 text-center text-light'>Twoje włosy, nasza pasja</h1>
                <p className='text-animate bigger-text text-center text-light'>Profesjonalne strzyżenie, koloryzacja i stylizacja dla kobiet i mężczyzn. Odwiedź nasz salon i odkryj, jak dobrze możesz wyglądać — i czuć się — każdego dnia.</p>
                <div className='text-animate flex justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={"https://booksy.com/pl-pl/"} target='_blank'>
                            Zarezerwuj
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection