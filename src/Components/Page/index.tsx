import React from 'react'

import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Skyline',
                        'Audi A3 2000',
                        'Civic Hatch EK9',
                        'Santana 1980',
                        'BMW e36',
                        'Uno',
                        'Supra',
                    ].map(modelName => (
                        <ModelSection
                            key={modelName}
                            className='colored'
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description='Order Online For Delivery'
                                />
                            }
                        />
                    ))}

                </div>

                <Spacer />

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}

export default Page