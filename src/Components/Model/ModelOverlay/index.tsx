import React, { useCallback, useLayoutEffect, useState } from 'react'
import { CarModel } from '../ModelsContext'
import useWrapperScroll from '../useWrapperlScroll'

import Container from "./styles"

interface Props {
    model: CarModel
    children: React.ReactNode
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC <Props> = ({ model, children}) => {
const { scrollY } = useWrapperScroll()

const getSetctionDimensions = useCallback(() => {
    return {
        offsetTop: model.sectionRef.current?.offsetTop,
        offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
}, [])

const [ dimensions, setDimensions ] = useState<SectionDimensions>(
    getSetctionDimensions()
)

useLayoutEffect(() => {}, [])
 
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ModelOverlay