const gooleApiKey = process.env.Google_API_KEY
const youtubeSearchUrl = process.env.YOUTUBE_SEARCH_URL
const youtubeChannel = process.env.YOUTUBE_CHANNEL

export const getVideos = () => {
    return fetch(`${youtubeSearchUrl}?channelId=${youtubeChannel}&maxResults=10&order=date&type=video&part=snippet&key=${gooleApiKey}`)
        .then(resp => resp.json())
}

export const getVideoById = async (id: string) => {
    return fetch(`${youtubeSearchUrl}?id=${id}&channelId=${youtubeChannel}&type=video&part=snippet,statistics&key=${gooleApiKey}`)
        .then(resp => resp.json())
}