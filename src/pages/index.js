import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="ThaibulkSMS" />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{
              borderBottom: "1px solid rgb(225, 225, 225)"
            }}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4),
                  textAlign: "center"
                }}
              >
                <Link style={{
                  boxShadow: `none`,
                  color: "#403e3d"
                }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>

              <div className="post_detail post_date">
                <span className="post_info_date">
                  <span>{node.frontmatter.date}</span>
                </span>
              </div>
              <Link to={node.fields.slug}>
                <div className="picCover">
                  <img src={node.frontmatter.thumbnail} alt="content" />
                </div>
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail
          }
        }
      }
    }
  }
`
