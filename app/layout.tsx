import { Metadata } from 'next'
import './globals.css'

import StyledComponentsRegistry from '../lib/registry'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header/Header'
import { clsx } from 'clsx'
import { philosopher } from '@/components/fonts'
import { BodyWrapper, LayoutBackground } from './(ui)/layout-styles'
import { Footer } from './(ui)/footer'

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
            <body className={clsx('min-h-screen', philosopher.className)}>
                <Providers>
                    <StyledComponentsRegistry>
                        <LayoutBackground>
                            <Header />
                            <BodyWrapper className="flex-auto overflow-y-auto min-h-max">
                                {children}
                                <Footer />
                            </BodyWrapper>
                        </LayoutBackground>
                    </StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    )
}
