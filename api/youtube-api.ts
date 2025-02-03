const gooleApiKey = process.env.Google_API_KEY
const youtubeUrl = process.env.YOUTUBE_URL
const youtubeChannel = process.env.YOUTUBE_CHANNEL

export const getVideos = () => {
    return fetch(`${youtubeUrl}/search?channelId=${youtubeChannel}&maxResults=10&order=date&type=video&part=snippet&key=${gooleApiKey}`)
        .then(resp => resp.json())
}

export const getVideoById = async (id: string) => {
    return fetch(`${youtubeUrl}/videos?id=${id}&type=video&part=snippet&key=${gooleApiKey}`)
        .then(resp => resp.json())
}