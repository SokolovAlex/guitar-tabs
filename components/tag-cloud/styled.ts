'use client'

import styled from 'styled-components'

export const TagCloudHost = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
`

export const TagItem = styled.span`
    cursor: pointer;
    margin: 5px;
    transition: transform 0.2s, color 0.2s;
    &:hover {
        transform: scale(1.2);
    }
`