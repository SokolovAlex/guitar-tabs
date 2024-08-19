import { 
    Navbar,
    NavbarBrand,
    NavbarContent,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from '@nextui-org/react'

import AuthButton from '../AuthButton'
import { FaSearch } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { LiaGuitarSolid, LiaPlayCircleSolid, LiaMusicSolid } from 'react-icons/lia'
import Link from 'next/link'
import { Menu } from './menu'
import { clsx } from 'clsx'
import { gloriaHallelujah } from '@/components/fonts'

export const Header = () => {
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <Link href="/">
                    <NavbarBrand className="mr-4">
                        <LiaGuitarSolid />
                        <LiaPlayCircleSolid color="green" size={16}/>
                        <LiaMusicSolid />
                        <span className={clsx('ml-2', gloriaHallelujah.className)}>Guitar Tabs</span>
                    </NavbarBrand>
                </Link>
                <Menu />
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: 'max-w-full h-10',
                        input: 'text-small',
                        inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                        mainWrapper: 'h-full',
                    }}
                    placeholder="Поиск"
                    size="sm"
                    startContent={<FaSearch/>}
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <AuthButton />
                    <DropdownTrigger>
                        <VscAccount />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}
