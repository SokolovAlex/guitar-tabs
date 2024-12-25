export enum TabStatus {
    Published,
    Draft,
    Arvchived,
}

export type Tab = {
    id: number
    created_at: Date
    name: string  
    description: string   
    video_link: string
    tab_link: string  
    author: number
    performer: string   
    isRussian: boolean
    status: TabStatus
}

