import { createClient } from '@/utils/supabase/server'

import { LimitedWidth } from '@/components/base/base'
import { Tab } from '@/types/tab'
import { PageProps } from '@/.next/types/app/page'

export default async function Index({ params }: PageProps) {
    const client = createClient()

    const tab: Tab | null = await client
        .from('tabs')
        .select()
        .eq('id', params.id)
        .then(x => x.data?.length > 0 ? x.data[0] : null)

    if (!tab) {
        return null
    }

    return (
        <div className="fit flex justify-center">
            <LimitedWidth>
                <div>{tab.id}</div>
                <iframe
                    width="100%"
                    height="600px"
                    src={tab.video_link}
                    title=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                /> 
                {tab.name}
                {tab.performer}
            </LimitedWidth>
        </div>
    )
}
