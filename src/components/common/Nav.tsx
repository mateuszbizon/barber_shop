import { LOGO } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NAV_ITEMS } from '@/constants/navItems'
import NavItemCard from '../cards/NavItemCard'
import NavItemsMobile from './NavItemsMobile'

function Nav() {
  return (
    <nav className='px-5 md:px-10 flex justify-between items-center h-nav-height bg-light sticky top-0 z-50'>
        <div>
            <Link href={"/"} title='Strona główna'>
                <figure className='relative size-14'>
                    <Image src={LOGO.src} alt={LOGO.alt} fill className='object-cover' />
                </figure>
            </Link>
        </div>

        <div className='hidden md:block'>
            <ul className='flex items-center'>
                {NAV_ITEMS.map(item => (
                    <li key={item.label}>
                        <NavItemCard item={item} />
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <div className='hidden md:block'>
                <Button asChild>
                    <Link href={"https://booksy.com/pl-pl/"} target='_blank'>
                        Zarezerwuj
                    </Link>
                </Button>
            </div>
            <div className='md:hidden'>
                <NavItemsMobile items={NAV_ITEMS} />
            </div>
        </div>
    </nav>
  )
}

export default Nav