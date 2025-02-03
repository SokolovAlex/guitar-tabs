import { createClient } from '@/utils/supabase/server'

import { LimitedWidthOnly } from '@/components/base/base'
import { Tab } from '@/types/tab'
import { PageProps } from '@/.next/types/app/page'
import { YoutubeVideoBlock } from '../(ui)/youtube-video'
import { gloriaHallelujah } from '@/components/fonts'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { MainColumn, SecondaryColumn } from '@/app/(ui)/layout-styles'
import { TCard } from '@/components/card/card'
import { clsx } from 'clsx'
import { Divider, Link } from '@nextui-org/react'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { PdfViewer } from '@/components/pdf-viewer/pdf-viewer'

export default async function Index({ params }: PageProps) {
    const client = createClient()
    const tab: Tab | null = await client
        .from('tabs')
        .select()
        .eq('id', params.id)
        .then((x: any) => x.data?.length > 0 ? x.data[0] : null)

    if (!tab) {
        return null
    }

    const { data } = await client
        .storage
        .from('tabs')
        .getPublicUrl(tab.tab_link)

    return (
        <div className="fit flex justify-center">
            <LimitedWidthOnly className="flex">
                <MainColumn className="p-2 h-full">
                    <h3 className={clsx(gloriaHallelujah.className, 'mb-2')}>{tab.name}</h3>
                    { tab.performer && <div><LiaUserCheckSolid />{tab.performer}</div>}
                    <Divider className="mb-2" />
                    <YoutubeVideoBlock videoId={tab.video_id} height="400" />
                    <Divider className="mb-2" />
                    <PdfViewer path={data?.publicUrl} />
                </MainColumn>
                <SecondaryColumn className="p-2 h-full">
                    <TCard className="h-full w-full"
                        header="Top tabs"
                        headerDescription='Some describe'
                        footer={
                            <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
                                Visit source code on GitHub.
                            </Link>
                        }>
                        Some Content
                    </TCard>
                </SecondaryColumn>
            </LimitedWidthOnly>
        </div>
    )
}
