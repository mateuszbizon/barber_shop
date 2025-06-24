"use client"

import { NavItem } from '@/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemCardProps = {
    item: NavItem
}

function NavItemCard({ item }: NavItemCardProps) {
    const pathname = usePathname()
    const isActive = pathname === item.href

  return (
    <Button variant={"navLink"} className={`px-3 ${isActive && "text-accent"}`} asChild>
        <Link href={item.href}>
            {item.label}
        </Link>
    </Button>
  )
}

export default NavItemCard