import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1 className="title">{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">Tokenomics</Link>
      </div>
    </nav>
  )
}

export default Navbar
