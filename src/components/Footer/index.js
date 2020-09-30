import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
    <Wrapper>
        <Item position='left'>
            <span>©</span> Anh Nguyen_{getCurrentYear()}
        </Item>

        <Item position='right'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/anguyen0208/anguyen0208.github.io'>Source code</a>
        </Item>
    </Wrapper>

export default Footer
