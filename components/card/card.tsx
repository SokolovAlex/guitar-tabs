import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode;
    footer?: ReactNode;
    header?: string;
    headerDescription?: string;
    className?: string;
}

export const TCard = ({ children, header, footer, className, headerDescription }: CardProps) => {
    return (
        <Card className={className}>
            { header &&
                <>
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">{header}</p>
                            <p className="text-small text-default-500">{headerDescription}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                </>
            }
            <CardBody>
                {children}
            </CardBody>
            <Divider />
            {footer && <CardFooter>{footer}</CardFooter> }
        </Card>

    )
}
