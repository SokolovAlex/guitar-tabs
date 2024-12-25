import { createClient } from '@/utils/supabase/server'
import { AddTabForm } from './(ui)/form'
import { LimitedWidth } from '@/components/base/base'

export default async function Index() {
    const client = createClient()
    const schema = await client.schema('Users')
    console.log('schema   -->', schema)

    if (!schema) {
        console.log('No connection   -->')
    }

    return (
        <div className="fit flex justify-center">
            <LimitedWidth>
                <AddTabForm />
            </LimitedWidth>
        </div>
    )
}
