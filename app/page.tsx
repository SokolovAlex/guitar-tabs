import { Title } from '@/components/base/title'
import { TabCard } from '@/components/tab-card/tab-card'
import { Tab } from '@/types/tab'
import { createClient } from '@/utils/supabase/server'

export default async function Index() {
    const client = createClient()
    const tabs: Tab[] | null = await client
        .from('tabs')
        .select('*')
        .then(x => x.data)

    if (!tabs || !tabs.length) {
        return null
    }

    return (
        <div className="fit flex max-width-4">
            <div className="p-4 w-1/5">Фильтры</div>
            <div className="fit flex-1 p-2">
                <Title>Tabs</Title>
                <div className="grid grid-cols-2 gap-2">
                    {tabs?.map(tab => <TabCard key={tab.name} tab={tab} />)}
                </div>
            </div>
        </div>
    )
}
