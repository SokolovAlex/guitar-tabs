/** @type {import('tailwindcss').Config} */
import {nextui} from '@nextui-org/react'

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                btn: {
                    background: 'hsl(var(--btn-background))',
                    'background-hover': 'hsl(var(--btn-background-hover))',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui({
        defaultTheme: 'light', // default theme from the themes object
        defaultExtendTheme: 'light', // default theme to extend on custom themes
        layout: {}, // common layout tokens (applied to all themes)
        themes: {
            light: {
                colors: {}, // light theme colors
            },
            dark: {
                colors: {
                    default: '$green200',
                    primary:'$green200',
                    secondary: '#4ADE7B',
                    success: '#ff4ecd',
                    warning: '#ff4ecd',
                    danger: '#ff4ecd',
                }, // dark theme colors
            },
        }
    })]
}
