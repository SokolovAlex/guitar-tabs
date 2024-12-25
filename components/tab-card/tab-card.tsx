'use client'

import { Tab } from '@/types/tab'
import {Card, CardFooter, Button} from '@nextui-org/react'
import { LiaPlaySolid } from 'react-icons/lia'
import { navigate } from '@/utils/actions'

type TabCardProps = {
    tab: Tab
}

export const TabCard = ({ tab }: TabCardProps) => {
    const onDetails = () => {
        navigate(`/tab/${tab.id}`)
    }
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none mb-2"
        >
            <iframe
                width="440"
                height="230"
                src={tab.video_link}
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            />                      
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-white/80">{tab.name}</p>
                <Button className="green" onClick={onDetails} variant="bordered" radius="lg" size="sm">
                    <LiaPlaySolid color="green" />
                </Button>
            </CardFooter>
        </Card>
    )
}
