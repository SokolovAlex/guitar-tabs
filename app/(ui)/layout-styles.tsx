'use client'

import styled from 'styled-components'

export const LayoutBackground = styled.div`
    background: linear-gradient(to bottom, #F2F5F7, #D9E2E8);
    min-height: 100vh;
    flex-direction: column;
    display: flex;
`

export const MainColumn = styled.div`
    width: 70%;
`

export const SecondaryColumn = styled.div`
    width: 30%;
    max-height: 700px;
`

export const PdfViewerHost = styled.div`
    min-height: 600px;
`

export const FooterHost = styled.div`
    background-color: #f8f9fa;
    color: #333;
    padding: 8px;
    text-align: center;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #e1e1e1;
`

export const BodyWrapper = styled.div`
    min-height: 800px;
`