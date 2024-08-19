import { Tab } from '@/types/tab'
import {Card, CardFooter, Button} from '@nextui-org/react'

type TabCardProps = {
    tab: Tab
}

export const TabCard = ({ tab }: TabCardProps) => {
    console.log('tab ==> ', tab)
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none mb-2"
        >
            <iframe
                width="560"
                height="315"
                src={tab.video_link}
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            />                      
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{tab.name}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    Открыть
                </Button>
            </CardFooter>
        </Card>
    )
}
