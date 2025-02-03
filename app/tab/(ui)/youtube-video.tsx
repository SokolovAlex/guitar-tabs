'use client'

import YouTube from 'react-youtube'

type YoutubeVideoProps = {
    videoId: string
    height?: string
    width?: string
}

export function YoutubeVideoBlock({ videoId, height = '500', width = '600' }: YoutubeVideoProps) {
    return (
        <div className="fit flex justify-center">
            <YouTube videoId={videoId} opts={{
                height,
                width,
                playerVars: {
                    autoplay: 0,
                },
            }} />
        </div>
    )
}

export const YoutubeVideo = ({ videoId, height = '500', width = '600' }: YoutubeVideoProps) => (
    <YouTube videoId={videoId} opts={{
        height,
        width,
        playerVars: {
            autoplay: 0,
        },
    }} />
)
