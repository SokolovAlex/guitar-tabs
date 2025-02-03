export type YoutubeResponse = {
    items: YoutubeItem[]
    nextPageToken: string
    prevPageToken: string
}

export type YoutubeItem = {
    id: {
        videoId: string
    };
    snippet: {
        title: string;
        publishTime: Date;
        thumbnails: {
            default: Thumbnail,
            medium: Thumbnail,
            high: Thumbnail
        }
    };
}

export type Thumbnail = {
    url: string;
    width: number;
    height: number;
}