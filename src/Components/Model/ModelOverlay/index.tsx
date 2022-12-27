import React from 'react'

import Container from "./styles"

const ModelOverlay: React.FC <{ children: React.ReactNode }> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ModelOverlay