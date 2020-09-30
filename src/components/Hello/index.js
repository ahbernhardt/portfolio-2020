import React from 'react'
import Link from 'gatsby-link'
import Hello from './Hello.svg'
import { Wrapper } from './style'

const HelloMiddle = props =>
    <Wrapper {...props}>
            <div className="padding">
                <h1>
                    <Link to='/'><Hello width={428} height={343} /></Link>
                </h1>
            </div>
    </Wrapper>

export default HelloMiddle
