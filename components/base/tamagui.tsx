'use client'

import { ComponentProps } from 'react'
import {
    Button as TGButton,
    XStack as TGXStack,
    YStack as TGYStack,
} from 'tamagui'

type TGButtonProps = ComponentProps<typeof TGButton>
// type XStackProps = ComponentProps<typeof TGXStack>
// type YStackProps = ComponentProps<typeof TGYStack>

export const Button = (props: TGButtonProps) => <TGButton {...props} />

//@todo fix any
export const XStack = (props: any) => <TGXStack {...props} />
export const YStack = (props: any) => <TGYStack {...props} />
