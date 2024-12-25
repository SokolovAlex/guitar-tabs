'use client'
import { v4 as uuidv4 } from 'uuid'
import { Title } from '@/components/base/title'
import { FileUploadButton } from '@/components/file-upload'
import { InputField } from '@/components/inputs/input'
import { ClientCaptcha } from '@/components/recaptcha/recaptcha'
import { createClient } from '@/utils/supabase/client'
import { Button, Card, Skeleton } from '@nextui-org/react'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TabStatus } from '@/types/tab'
import { SuccessMessage } from './succes-message'
import YouTube, { YouTubeProps } from 'react-youtube'
import { getYouTubeVideoId } from '@/utils/youtube'
import { getVideoById } from '@/api/youtube-api'

const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
}

export const AddTabForm = () => {
    const methods = useForm()
    const { handleSubmit, getValues, formState: { errors } } = methods
    const [file, setFile] = useState()
    const [isSuccess, setIsSuccess] = useState(false)
    const [validationError, setValidationError] = useState<string>()
    const [videoId, setVideoId] = useState<string>()
    const [isInProgress, setIsInProgress] = useState(false)
    const onMoreClick = useCallback(() => setIsSuccess(false) , [])
    const onUpload = useCallback(async (file: any) => setFile(file) , [])
    const onSubmit = useCallback(async (formData: any) => {
        if (!file) {
            setValidationError('загрузите табулатуры')
            return
        }
        const client = createClient()
        const pdfPath = `drafts/${uuidv4()}.pdf`
        setIsInProgress(true)
        const { error: loadError } = await client
            .storage
            .from('tabs')
            .upload(pdfPath, file, {
                cacheControl: '3600',
                upsert: false
            })

        const { error } = await client
            .from('tabs')
            .insert({
                created_at: new Date(),
                name: 'from_video_link',
                video_link: formData.videoLink,
                tab_link: pdfPath,
                status: TabStatus.Draft
            })
        setIsInProgress(false)

        if (!error && !loadError) {
            setValidationError(undefined)
            setIsSuccess(true)
            return 
        }
        
        if (error) {
            console.log('Error during uploading file: ', error)
            setValidationError(error.message)
        }
        if (loadError) {
            console.log('Error during uploading file: ', loadError)
            setValidationError(loadError.message)
        }
    }, [file])

    const checkVideo = useCallback(async () => {
        const videoLink = getValues('videoLink')
        const videoId = getYouTubeVideoId(videoLink)
        setVideoId(videoId)

        if (!videoId) {
            return 
        }
        console.log('videoId', videoId)
        getVideoById(videoId).then((x: any) => console.log('stats', x))
    }, [])

    console.log(errors)

    return <div className="fit w-full pt-4">
        { validationError && <div className="text-red-500">{validationError}</div>}
        { isSuccess ? <SuccessMessage onMoreClick={onMoreClick} /> :
            <FormProvider {...methods}>
                <div className="flex">
                    <form onSubmit={handleSubmit(onSubmit)} className='flex-1'>
                        <Title>Добавить</Title>
                        <div className='my-4'>
                            <InputField
                                name="videoLink"
                                required
                                label="Сcылка на видео"
                                onBlur={checkVideo}
                            />
                        </div>
                        <div className='my-4'>
                            <FileUploadButton onUpload={onUpload}>Загрузить табы</FileUploadButton>
                        </div>
                        <div className='my-4'>
                            <ClientCaptcha />
                        </div>
                        <div className='my-4'>
                            <Button type="submit" color='primary' isLoading={isInProgress}>Отправить</Button>
                        </div>
                    </form>
                    {videoId ? <YouTube videoId={videoId} opts={opts} /> :
                        <Card className="flex-1 space-y-5 p-4" radius="lg">
                            <Skeleton className="rounded-lg">
                                <div className="h-48 rounded-lg bg-secondary" />
                            </Skeleton>
                            <div className="space-y-3">
                                <Skeleton className="w-3/5 rounded-lg">
                                    <div className="h-3 w-full rounded-lg bg-secondary" />
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg">
                                    <div className="h-3 w-full rounded-lg bg-secondary-300" />
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                    <div className="h-3 w-full rounded-lg bg-secondary-200" />
                                </Skeleton>
                            </div>
                        </Card>
                    }
                </div>
            </FormProvider>
        }
    </div>
}