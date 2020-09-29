import React from 'react'
import Link from 'gatsby-link'
import MainLogo from './logo.svg'
import { Wrapper } from './style'

const Logo = () =>
    <Wrapper>
        <div>
            <Link to='/'><MainLogo width={100} height={100} /></Link>
            <div className="logo svg" />
        </div>
    </Wrapper>

export default Logo
