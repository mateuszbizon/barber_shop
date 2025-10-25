import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { LOGO_WHITE } from '@/constants/images'
import { NAV_ITEMS } from '@/constants/navItems'
import Link from 'next/link'
import { Button } from '../ui/button'
import { EMAIL, LOCATION, PHONE_NUMBER } from '@/constants'
import { Instagram } from 'lucide-react'
import Facebook from '../ui/icons/facebook'

function Footer() {
  return (
    <footer className='pt-section-padding pb-10 bg-dark text-light'>
        <Container>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                <div className='space-y-2 text-center md:text-left'>
                    <figure className='relative size-20 mx-auto md:mx-0'>
                        <Image src={LOGO_WHITE.src} alt={LOGO_WHITE.alt} fill className='object-cover' />
                    </figure>
                    <p className='text-lg'>
                        <em>
                            Zadbaj o swoje włosy w naszym salonie fryzjerskim. Oferujemy profesjonalne usługi fryzjerskie, które sprawią, że poczujesz się wyjątkowo.
                        </em>
                    </p>
                </div>

                <div className='space-y-7 text-center md:text-left'>
                    <p className='text-xl font-medium'>Nawigacja</p>
                    <ul className='space-y-5'>
                        {NAV_ITEMS.map(item => (
                            <li key={item.label}>
                                <Button className='text-light hover:text-light/70' size={"link"} variant={"link"} asChild>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='space-y-7 text-center lg:text-left'>
                    <p className='text-xl font-medium'>Dane kontaktowe</p>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>Zadzwoń do nas</p>
                        <Button className='text-light hover:text-light/70' size={"link"} variant={"link"} asChild>
                            <Link href={`tel:${PHONE_NUMBER}`}>
                                <p>{PHONE_NUMBER}</p>
                            </Link>
                        </Button>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>Adres salonu</p>
                        <p className='font-medium'>{LOCATION}</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>Adres e-mail</p>
                        <Button className='text-light hover:text-light/70' size={"link"} variant={"link"} asChild>
                            <Link href={`tel:${EMAIL}`}>
                                <p>{EMAIL}</p>
                            </Link>
                        </Button>
                    </div>
                    <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                        <Button className='size-11' size={"icon"} asChild>
                            <Link href={"https://www.instagram.com/"} target='_blank' title='Instagram'>
                                <span className='sr-only'>instagram</span>
                                <Instagram className='size-6' />
                            </Link>
                        </Button>
                        <Button className='size-11' size={"icon"} asChild>
                            <Link href={"https://www.facebook.com/"} target='_blank' title='Facebook'>
                                <span className='sr-only'>facebook</span>
                                <Facebook className='size-6' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex flex-col sm:flex-row justify-between gap-3 items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Nazwa Firmy</span>
                </p>
                <p>
                    <Button variant={"link"} size={"link"} className='text-light hover:text-light/70' asChild>
                        <Link href="https://www.mateuszbizonweb.pl" target='_blank'>
                            Stworzone przez Matiego
                        </Link>
                    </Button>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer