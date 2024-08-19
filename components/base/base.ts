'use client'
import Link from 'next/link'
import styled from 'styled-components'

const maxWidth = '1000px'

export const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const LimitedWidth = styled.div`
    display: flex;
    width: ${maxWidth};
    justify-content: space-between;
    align-items: center;
`

export const NavLink = styled(Link)`
    padding: 4px;
    border-radius: 4px;
    transition: all 0.8s ease-out;
    border-color: #0fa915;
    color: #0fa915;
    font-weight: 500;
    border-width: 2px;
    background-color: transparent;

    &:hover {
        color: white;
        text-decoration: none;
        background: rgb(15,169,21);
        background: linear-gradient(90deg, rgba(15,169,21,1) 0%, rgba(17,196,24,1) 55%);
    }
`
