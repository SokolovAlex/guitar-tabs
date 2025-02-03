'use client'

import { Navbar, NavbarContent } from '@nextui-org/react'
import styled from 'styled-components'

export const StyledNavbarContent = styled(NavbarContent)`
    *[data-active="true"] {
        color: #0fa915;
        text-decoration: underline;
    }
`

export const TabsNavbar = styled(Navbar)`
    background: linear-gradient(to bottom left, #F2F5F7, #D9E2E8);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`