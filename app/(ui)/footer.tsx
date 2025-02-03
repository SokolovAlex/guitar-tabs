import { TabTagsCloud } from '@/components/tag-cloud/tag-cloud'
import { FooterHost } from './layout-styles'

export const Footer = () => {
    return (
        <FooterHost className="flex-0">
            <TabTagsCloud />
        </FooterHost>
    )
}
