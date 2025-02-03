import React from 'react'
import { TagCloudHost, TagItem } from './styled'

//Метки 0 запрос по меткам и повторениям

const tags = [
    { text: 'React', weight: 5 },
    { text: 'JavaScript', weight: 3 },
    { text: 'CSS', weight: 4 },
    { text: 'HTML', weight: 2 },
    { text: 'Node.js', weight: 6 },
    { text: 'Web Development', weight: 3 },
    { text: 'Frontend', weight: 4 },
    { text: 'Backend', weight: 2 },
]

const minWeight = Math.min(...tags.map(tag => tag.weight))
const maxWeight = Math.max(...tags.map(tag => tag.weight))

const getFontSize = (weight: number) => {
    const minFontSize = 12
    const maxFontSize = 32
    return ((weight - minWeight) / (maxWeight - minWeight)) * (maxFontSize - minFontSize) + minFontSize
}

export const TabTagsCloud = () => {
    return (
        <TagCloudHost>
            {tags.map((tag, index) => (
                <TagItem
                    key={index}
                    style={{
                        fontSize: `${getFontSize(tag.weight)}px`,
                        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
                    }}
                >
                    {tag.text}
                </TagItem>
            ))}
        </TagCloudHost>
    )
}