import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/Welcome/Intro'
import Head from '../components/Head'
import HelloMiddle from '../components/Welcome/Hello'
import { META } from '../utils/constants'

export default ({ location }) =>
    <Layout location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
        <HelloMiddle />
        <Intro fixed={true} />
      </section>
    </Layout>
