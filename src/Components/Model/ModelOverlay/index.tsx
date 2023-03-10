import { useTransform } from 'framer-motion'
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

const getSetctionDimensions = useCallback(() => {
    return {
        offsetTop: model.sectionRef.current?.offsetTop,
        offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions
}, [])

const [ dimensions, setDimensions ] = useState<SectionDimensions>(
    getSetctionDimensions()
)

useLayoutEffect(() => {
    function onResize() {
        window.requestAnimationFrame(() => setDimensions(getSetctionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
}, [])

const { scrollY } = useWrapperScroll()
 
    const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

    const opacity = useTransform(
        sectionScrollProgress,
        [-0.42, -0.05, 0.05, 0.42],
        [0, 1, 1, 0]
    ) 

        const pointerEvents = useTransform(opacity, value => 
            value > 0 ? 'auto' : 'none')

    return (
        <Container style={{ opacity }}>
            {children}
        </Container>
    )
}

export default ModelOverlay