import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
    <Wrapper>
        <Item position='left'>
            <span>©</span>Anh Nguyen {getCurrentYear()}
        </Item>

        <Item position='right'>
            {/*<span>P.I. 03671100984&nbsp;-&nbsp;</span>*/}
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/anguyen0208/anguyen0208.github.io'>Source code</a>
        </Item>
    </Wrapper>

export default Footer
