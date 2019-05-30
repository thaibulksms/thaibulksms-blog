/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        // const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
              borderBottom: "1px solid rgb(225, 225, 225)",
              // borderTop: "1px solid rgb(225, 225, 225)",
              paddingBottom: "8px",
              paddingTop: "80px",
              // marginTop: "55px"
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> ผู้นำด้าน SMS ครบวงจร, ช่องทางการสื่อสารธุรกิจคุณ ที่เข้าถึงลูกค้าได้ไวที่สุด.
              {` `}
              {/* <a href={`https://twitter.com/${social.twitter}`}>
                ThaiBulkSMS.com
              </a> */}
              <a href={`https://www.thaibulksms.com`}>
                ThaiBulkSMS.com
              </a>

            </p>
            <br />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
              avatar: file(absolutePath: {regex: "/profile-pic.jpg/" }) {
              childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
            }
          }
    site {
              siteMetadata {
            author
        social {
              twitter
            }
            }
          }
        }
      `

export default Bio
