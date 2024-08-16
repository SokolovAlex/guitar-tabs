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
    text-decoration: underline;
    background-color: #cfcfcf;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 1s ease-out;

    &:hover {
        color: #636363;
        text-decoration: none;
        background-color: #e9e9e9;
    }
`
