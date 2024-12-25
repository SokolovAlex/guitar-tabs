'use client'

import { Button } from '@nextui-org/react'
import { useCallback } from 'react'

type MoreProps = {
    nextUrl: string
}

export const More = ({ nextUrl }: MoreProps) => {
    const onNext = useCallback(() => {
        console.log('nextVideoLink', nextUrl)
    }, [nextUrl])

    return (
        <div className="fit flex justify-center">
            <Button onClick={onNext}>Next Page</Button>
        </div>
    )
}
