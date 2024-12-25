'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { useCallback, useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

const isAllFiles = (dt: DataTransfer) =>
    dt.types.every(t => t === 'Files' || t === 'application/x-moz-file')

const doesAccept = (type: string, accept?: string) => {
    if (!accept) {
        return true
    }
	
    const acceptList = accept.split(',').map(c => c.trim())
    let cond = false
    for (const acceptor of acceptList) {
        if (acceptor.endsWith('*')) {
            cond ||= type.startsWith(acceptor.slice(0, -1))
        } else {
            cond ||= type === acceptor
        }
    }
    return cond
}

const isEventAllowed = <T extends HTMLElement>(e: React.DragEvent<T>, accept: string | undefined, multiple: boolean) => {
    if (!isAllFiles(e.dataTransfer)) {
        return false
    }

    const items = Array.from(e.dataTransfer.items)
    if (items.length === 0 || (!multiple && items.length > 1)) {
        return false
    }
    return items.every(c => doesAccept(c.type, accept))
}

export const FileUploadButton = (
    { accept, onUpload, acceptProps = { color: 'primary' }, rejectProps = { color: 'danger' }, multiple = false, classNames, className, ...props }:
		ButtonProps & {
		    classNames?: { wrapper?: string; button?: string; };
		    onUpload?: (files: File[]) => void;
		    acceptProps?: ButtonProps,
		    rejectProps?: ButtonProps,
		    accept?: string;
		    multiple?: boolean;
		}
) => {
    const { control } = useFormContext()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [ acceptance, setAcceptance ] = useState<null | 'ACCEPT' | 'REJECT'>(null)
    const [ files, setFiles ] = useState<FileList>()

    const onDragEnter = useCallback((e: React.DragEvent<HTMLButtonElement>) => {
        if (isEventAllowed(e, accept, multiple)) {
            setAcceptance('ACCEPT')
        } else {
            setAcceptance('REJECT')
        }
    }, [ accept, multiple, setAcceptance ])

    const onDragOver = useCallback((e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isEventAllowed(e, accept, multiple)) {
            setAcceptance('ACCEPT')
        } else {
            setAcceptance('REJECT')
        }
    }, [ accept, multiple, setAcceptance ])

    const onDragFinish = useCallback(() => {
        setAcceptance(null)
    }, [ setAcceptance ])

    const onDrop = useCallback((e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.persist()
        e.stopPropagation()
		
        if (isEventAllowed(e, accept, multiple)) {
            const items = Array.from(e.dataTransfer.items)
            if (items.length) {
                onUpload?.(items.map(c => c.getAsFile()!))
            }
        }

        setAcceptance(null)
    }, [ accept, multiple, onUpload, setAcceptance ])


    const onButtonPress = useCallback(() => {
        inputRef.current?.click()
    }, [ inputRef ])

    return <>
        <label htmlFor='tabFile'>
            <Button {...props}
                {...(acceptance === 'ACCEPT' ? acceptProps : acceptance === 'REJECT' ? rejectProps : {})}
                className={twMerge(
                    className,
                    classNames?.button,
                    acceptance === 'ACCEPT'
                        ? acceptProps?.className
                        : acceptance === 'REJECT'
                            ? rejectProps?.className
                            : null
                )}
                onPress={onButtonPress}
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragEnd={onDragFinish}
                onDragLeave={onDragFinish}
                onDrop={onDrop}
            />
        </label>
        <div>
            {files && Array.from(files).map((file, i) => <div key={i} className='mt-1'>{file.name}</div>)}
        </div>
        <Controller control={control} name='tabFile' render={({ field }) => {
            return <input
                type='file'
                role='presentation'
                name='tabFile'
                ref={inputRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files
                    onUpload?.(Array.from(files!))
                    if (files) {
                        setFiles(files)
                    }
                    field.onChange(Array.from(e.target.files!))
                }}
                accept={accept}
                multiple={multiple}
                className='hidden'
            />
        }} />
    </> 
}