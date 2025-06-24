"use client"

import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { NavItem } from '@/types'
import NavItemCard from '../cards/NavItemCard'
import Link from 'next/link'

type NavItemsMobileProps = {
    items: NavItem[]
}

function NavItemsMobile({ items }: NavItemsMobileProps) {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button className='bg-transparent' size={"icon"}>
                <Menu className='size-5' />
            </Button>
        </SheetTrigger>
        <SheetContent className='py-10'>
            <SheetHeader className='hidden'>
                <SheetTitle>Mobile navigation</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-5'>
                <ul className='space-y-2'>
                    {items.map(item => (
                        <li key={item.label}>
                            <NavItemCard item={item} />
                        </li>
                    ))}
                </ul>
                <div className='px-3'>
                    <Button asChild>
                        <Link href={"https://booksy.com/pl-pl/"} target='_blank'>
                            Zarezerwuj
                        </Link>
                    </Button>
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default NavItemsMobile