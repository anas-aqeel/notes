"use client"
import { MathJax } from 'better-react-mathjax'
import React from 'react'

const MathTxt = ({ children }) => {
    return (
        <MathJax inline dynamic>
            {children}
        </MathJax>
    )
}

export default MathTxt