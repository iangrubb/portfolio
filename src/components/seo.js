/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, isBlogPost, isProject, slug, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description


  const determineUrlExtension = (slug, title) => {
    if (slug) {
      return slug
    } else if (title === "Home") {
      return ""
    } else {
      return `/${title.toLowerCase()}`
    }
  }

  const pageUrl = `${site.siteMetadata.siteUrl}${determineUrlExtension(slug, title)}`

  return (
    <>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={ isBlogPost || isProject ? ( isBlogPost ? "Blog" : "Portfolio") : title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "canonical",
          href: pageUrl,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${pageUrl}`
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: isBlogPost ? `article` : `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        image ?
        [
          {
            property: "og:image",
            content: `${site.siteMetadata.siteUrl}${image.src}`,
          },
          {
            property: "og:image:width",
            content: image.width,
          },
          {
            property: "og:image:height",
            content: image.height,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          }
        ]
        : 
        [
          {
            name: "twitter:card",
            content: "summary",
          },
        ]
      )
      .concat(meta)}
    />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
  slug: PropTypes.string
}

export default SEO
