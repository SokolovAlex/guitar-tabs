import { Logo } from '../components/Logo'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/tutorial/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/tutorial/SignUpUserSteps'
import { Title } from '@/components/base/title'
import { LimitedWidth, NavLink, Row } from '@/components/base/base'

export default async function Index() {
    const canInitSupabaseClient = () => {
        // This function is just for the interactive tutorial.
        // Feel free to remove it once you have Supabase connected.
        try {
            createClient()
            return true
        } catch (err) {
            console.log('init supabase', err)
            return false
        }
    }

    const isSupabaseConnected = canInitSupabaseClient()

    return (
        <div className="fit flex flex-column justify-between items-center">
            <Row className="py1 border-bottom">
                <LimitedWidth>
                    <Logo />
                    {isSupabaseConnected && <AuthButton />}
                </LimitedWidth>
            </Row>

            <div className="flex flex-col max-width-4">
                <main className="flex-1 flex flex-col gap-6">
                    <Title>Next steps</Title>
                    {isSupabaseConnected ? (
                        <SignUpUserSteps />
                    ) : (
                        <ConnectSupabaseSteps />
                    )}
                </main>
            </div>
        </div>
    )
}
