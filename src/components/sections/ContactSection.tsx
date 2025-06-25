import React from 'react'
import Container from '../ui/container'
import { EMAIL, LOCATION, PHONE_NUMBER } from '@/constants'
import Link from 'next/link'

function ContactSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col justify-center items-center gap-8 md:w-1/3 rounded-xl bg-[#183700] text-light p-5 text-center'>
                    <h2 className='heading3'>Kontakt</h2>
                    <div className='space-y-1'>
                        <p className='text-xl font-semibold'>Zadzwoń do nas</p>
                        <Link href={`tel:${PHONE_NUMBER}`}>
                            <p className='text-xl font-medium'>{PHONE_NUMBER}</p>
                        </Link>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xl font-semibold'>Adres salonu</p>
                        <p className='text-xl font-medium'>{LOCATION}</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-xl font-semibold'>Adres e-mail</p>
                        <Link href={`mailto:${EMAIL}`}>
                            <p className='text-xl font-medium'>{EMAIL}</p>
                        </Link>
                    </div>
                </div>

                <div className='grow md:-order-1 text-center space-y-8'>
                    <h2 className='heading2 text-center'>Godziny otwarcia</h2>
                    <div className='space-y-2'>
                        <h3 className='heading3'>Pn - Pt</h3>
                        <p className='bigger-text'>9:00 - 19:00</p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='heading3'>Sobota</h3>
                        <p className='bigger-text'>10:00 - 18:00</p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='heading3'>Niedziela</h3>
                        <p className='bigger-text'>Nieczynne</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactSection