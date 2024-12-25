export const getYouTubeVideoId = (url: string): string | undefined => {
    try {
        const parsedUrl = new URL(url)
        if (parsedUrl.hostname === 'www.youtube.com' || parsedUrl.hostname === 'youtube.com') {
            // Если это обычный URL YouTube
            return parsedUrl.searchParams.get('v') || undefined
        } else if (parsedUrl.hostname === 'youtu.be') {
            // Если это короткий URL YouTube
            return parsedUrl.pathname.slice(1)
        }
    } catch (e) {
        console.error('Invalid URL:', e)
        return undefined
    }
    return undefined
}
