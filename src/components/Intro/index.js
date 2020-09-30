import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props =>
    <Wrapper {...props} >
        <Title>
            My name is <span className="name">Anh Nguyen</span>, a software engineer graduate student based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </Title>
        {/*<Title>*/}
        {/*    /!*<span className="sub-title">Creative, Logical Solutions for Design</span>*!/*/}
        {/*</Title>*/}
    </Wrapper>

export default Intro
