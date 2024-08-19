'use client'

import { Title } from '@/components/base/title'
import { Tab } from '@/types/tab'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Index() {
    const [tabs, setTabs] = useState<Tab[]>([])
    useEffect(() => {
        const client = createClient()
        client
            .from('tabs')
            .select('*')
            .then(resp => {
                console.log(resp.data)
                if (!resp.data) {
                    return
                }
                setTabs(resp.data)
            })
    }, [])

    console.log('tabs ==> ', tabs)

    return (
        <div className="fit flex flex-column justify-between items-center">
            <div className="flex flex-col max-width-6">
                <Title>Tabs</Title>
                {JSON.stringify(tabs)}
            </div>
        </div>
    )
}
