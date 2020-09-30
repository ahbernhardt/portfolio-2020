import React from 'react'
// import { StaticQuery } from 'gatsby'
// , graphql
import Layout from '../components/layout'
import ProfileContent from '../components/Profile/Content'

// const profileQuery = graphql`
//   query ProfileQuery {
//     clients: allClientsJson {
//       edges {
//         client: node {
//           name
//         }
//       }
//     }
//     events: allEventsJson {
//       edges {
//         event: node {
//           year
//           position
//           company
//         }
//       }
//     }
//     mentions: allMentionsJson {
//       edges {
//         mention: node {
//           name
//           url
//         }
//       }
//     }
//     articles: allArticlesJson {
//       edges {
//         article: node {
//           name
//           url
//         }
//       }
//     }
//   }
// `

export default ({ location }) =>
    // <StaticQuery
        // query={profileQuery}
        // render={data =>
            <Layout location={location}>
                <ProfileContent />
                {/*data={data}*/}
            </Layout>
        // }
    // />
