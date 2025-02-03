'use client'
import { v4 as uuidv4 } from 'uuid'
import { Title } from '@/components/base/title'
import { FileUploadButton } from '@/components/file-upload'
import { InputField } from '@/components/inputs/input'
import { createClient } from '@/utils/supabase/client'
import { Button, Card, Skeleton } from '@nextui-org/react'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TabStatus } from '@/types/tab'
import { SuccessMessage } from './succes-message'
import YouTube, { YouTubeProps } from 'react-youtube'
import { getYouTubeVideoId } from '@/utils/youtube'
import { getVideoById } from '@/api/youtube-api'
import { YoutubeItem } from '@/types/youtube'

const opts: YouTubeProps['opts'] = {
    height: '400',
    width: '480',
    playerVars: {
        autoplay: 0,
    },
}

export const AddTabForm = () => {
    const methods = useForm()
    const { handleSubmit, getValues, reset } = methods
    const [file, setFile] = useState<any>()
    const [isSuccess, setIsSuccess] = useState(false)
    const [videoStat, setVideoStat] = useState<YoutubeItem>()
    const [validationError, setValidationError] = useState<string>()
    const [videoId, setVideoId] = useState<string>()
    const [isInProgress, setIsInProgress] = useState(false)
    const onMoreClick = useCallback(() => {
        setIsSuccess(false)
        reset()
    }, [])
    const onUpload = useCallback(async (files: any[]) => setFile(files[0]) , [])
    const onSubmit = useCallback(async (formData: any) => {
        if (!file) {
            setValidationError('загрузите табулатуры')
            return
        }
        const client = createClient()
        const pdfPath = `drafts/${uuidv4()}-${file.name}`
        setIsInProgress(true)

        console.log('file --> ', file)

        const { error: loadError } = await client
            .storage
            .from('tabs')
            .upload(pdfPath, file, {
                cacheControl: '3600',
                contentType: 'application/pdf',
            })

        if (loadError) {
            console.log('Error during uploading file: ', loadError)
            setValidationError(loadError.message)
            return
        }

        const { error } = await client
            .from('tabs')
            .insert({
                created_at: new Date(),
                name: videoStat?.snippet.title,
                video_link: formData.videoLink,
                video_id: getYouTubeVideoId(formData.videoLink),
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
        
    }, [file, videoStat])

    const checkVideo = useCallback(async () => {
        const videoLink = getValues('videoLink')
        const videoId = getYouTubeVideoId(videoLink)
        setVideoId(videoId)
        if (!videoId) {
            return 
        }
        console.log('videoId', videoId)
        const data = await getVideoById(videoId)
        console.log(data)
        if (data.items.length === 0) {
            console.log('Error during uploading file: ')
        }
        setVideoStat(data.items[0])
    }, [])

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
                        {/* <div className='my-4'>
                            <ClientCaptcha />
                        </div> */}
                        <div className='my-4'>
                            <Button type="submit" color='primary' isLoading={isInProgress}>Отправить</Button>
                        </div>
                    </form>
                    <div className='flex-1 flex flex-col items-center'>
                        {videoId ?
                            <>
                                <YouTube videoId={videoId} opts={opts} />
                                <div className="pt-2 w-96" style={{ width: '480px'}}>{videoStat?.snippet.title}</div>
                            </>:
                            <Card className="flex-1 space-y-5 p-4 w-full" radius="lg">
                                <Skeleton className="rounded-lg">
                                    <div className="h-56 rounded-lg bg-secondary" />
                                </Skeleton>
                                <div className="space-y-3">
                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-full rounded-lg bg-secondary" />
                                    </Skeleton>
                                    <Skeleton className="w-2/5 rounded-lg">
                                        <div className="h-3 w-full rounded-lg bg-secondary-200" />
                                    </Skeleton>
                                </div>
                            </Card>
                        }
                    </div>
                </div>
            </FormProvider>
        }
    </div>
}