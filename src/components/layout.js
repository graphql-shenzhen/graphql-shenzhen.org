/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          
        }}
      >
        <main>{children}</main>
        <footer id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info">
                  <p>© Theme by <a href="http://uideck.com" rel="nofollow">UIdeck</a></p>
                </div>      
              </div>
            </div>
          </div>
        </footer>        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
