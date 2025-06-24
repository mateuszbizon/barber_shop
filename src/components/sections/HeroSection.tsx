import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Shadow from '../ui/shadow'
import { HERO_IMAGE } from '@/constants/images'

function HeroSection() {
  return (
    <header style={{ backgroundImage: `url(${HERO_IMAGE.src})` }} className='header-section-height z-0 relative bg-cover bg-center bg-no-repeat'>
        <Shadow />
        <Container>
            <div className='flex flex-col justify-center gap-5 md:gap-10 h-full'>
                <h1 className='heading1 text-center text-light'>Najlepszy Barber Shop w Polsce</h1>
                <p className='bigger-text text-center text-light'>Zapraszamy do naszego lokalu w Warszawie.</p>
                <div className='flex justify-center'>
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