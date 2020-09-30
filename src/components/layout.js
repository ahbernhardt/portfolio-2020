import React from 'react'
import Navigation from './Navigation'
import { GlobalStyle } from '../style/global'
import CircleCursor from "./Cursor";

export default ({ children, location }) =>
    <main>
        <CircleCursor />
        <GlobalStyle />
        {children}
        <Navigation location={location}/>
    </main>
