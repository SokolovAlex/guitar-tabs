import { getVideos } from '@/api/youtube-api'
import { More } from './more'
import { YoutubeResponse } from '@/types/youtube'

// youtube_v3.Schema$SearchListResponse
// var url = `https://www.youtube.com/watch?v=${result.id.videoId}`;

//const res = await youtube.videos.list({
//     part: "snippet,contentDetails",
//     id: videoId,
//   });

export default async function Index() {
    const videos: YoutubeResponse = await getVideos()
    return (
        <div className="fit flex justify-center">
            {videos.items.map((video: any) => <div key={video.id.videoId} >
                <img src={video.snippet.thumbnails.medium.url} />
            </div>)}
            <More nextUrl={videos.nextPageToken}/>
        </div>
    )
}
