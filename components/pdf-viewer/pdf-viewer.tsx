'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import { PdfViewerHost } from '@/app/(ui)/layout-styles'

type PdfViewerProps = {
    path: string;
}

export const PdfViewer = ({ path }: PdfViewerProps) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    return (
        <PdfViewerHost>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <Viewer
                    fileUrl={path}
                    renderError={() => <div>Some Errorr</div>}
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </Worker>
        </PdfViewerHost>
    )
}
