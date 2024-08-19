import { Metadata } from 'next'
import './globals.css'

import StyledComponentsRegistry from '../lib/registry'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header/Header'
import { clsx } from 'clsx'
import { philosopher } from '@/components/fonts'

export const metadata: Metadata = {
    description: 'Your page description',
    icons: '/favicon.ico',
    title: 'Your page title',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className='light'>
            <body className={clsx('bg-background', philosopher.className)}>
                <Providers>
                    <StyledComponentsRegistry>
                        <Header />
                        {children}
                    </StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    )
}
