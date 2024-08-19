'use client'

import { usePathname } from 'next/navigation'
import { 
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'

export const Menu = () => {
    const path = usePathname()
    return <NavbarContent className="hidden sm:flex gap-3">
        <NavbarItem isActive={path === '/'}>
            <Link href="/">
                Все
            </Link>
        </NavbarItem>
        <NavbarItem isActive={path === '/top'}>
            <Link href="/top">
                Топ
            </Link>
        </NavbarItem>
        <NavbarItem isActive={path === '/lessons'}>
            <Link href="/lessons" aria-current="page">
                Уроки
            </Link>
        </NavbarItem>
        <NavbarItem isActive={path === '/add'}>
            <Link href="/add">
                Добавить
            </Link>
        </NavbarItem>
    </NavbarContent>
}