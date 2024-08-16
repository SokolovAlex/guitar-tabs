import { Metadata } from 'next'
import './globals.css'

// https://basscss.com/
import 'basscss/css/basscss.min.css'
import StyledComponentsRegistry from '../lib/registry'
import { Providers } from '@/components/providers'

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
        <html lang="en">
            <body className="bg-background text-foreground">
                <Providers>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    )
}
