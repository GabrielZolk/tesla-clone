import React from 'react'
import { Container, Heading, Button } from './styles'

interface Props {
    label: string
    description: string
}

const DefaultOverlayContent: React.FC<Props> = ({
    label, description
}) =>  {
  return (
    <Container>
        <Heading>
            <h1>{label}</h1>
            <h2>{description}</h2>
        </Heading>

        <Button>
            <button>Custom Order</button>
            <button className='white'>Existing Inventory</button>
        </Button>
    </Container>
  )
}

export default DefaultOverlayContent
