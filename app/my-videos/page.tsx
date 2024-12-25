import { getVideos, getVideos2 } from '@/api/youtube-api'
import { More } from './more'

type YoutubeResponse = {
    items: YoutubeSnippet[]
    nextPageToken: string
    prevPageToken: string
}

type YoutubeSnippet = {
    id: {
        videoId: string
    };
    snippet: {
        title: string;
        publishTime: Date;
        thumbnails: {
            default: Image,
            medium: Image,
            high: Image
        }
    };
}

type Image = {
    url: string;
    width: number;
    height: number;
}

// youtube_v3.Schema$SearchListResponse
// var url = `https://www.youtube.com/watch?v=${result.id.videoId}`;

//const res = await youtube.videos.list({
//     part: "snippet,contentDetails",
//     id: videoId,
//   });

export default async function Index() {
    const videos: YoutubeResponse = await getVideos()
    const videos2: any = await getVideos2()
    console.log(JSON.stringify(videos2))
    return (
        <div className="fit flex justify-center">
            {videos.items.map((video: any) => <div key={video.id.videoId} >
                <img src={video.snippet.thumbnails.medium.url} />
            </div>)}
            {videos2.items.map((video: any) => <div key={video.id.videoId} >
                <img src={video.snippet.thumbnails.medium.url} />
            </div>)}
            <More nextUrl={videos.nextPageToken}/>
        </div>
    )
}
