import { Button, Card, CardBody } from '@nextui-org/react'
import { BsCheckCircle } from 'react-icons/bs'

type SuccessMessageProps = {
    onMoreClick: () => void
}

export const SuccessMessage = ({ onMoreClick }: SuccessMessageProps) => {
    return <div>
        <Card isBlurred>
            <CardBody>
                <div className="flex mb-4 items-center">
                    <div><BsCheckCircle color="green" size={32} /></div>
                    <div className="flex ml-4">Успешно загружено</div>
                </div>
                <Button radius="full" size="sm" onClick={onMoreClick}>Добавить еще</Button>
            </CardBody>
        </Card>
    </div>
}