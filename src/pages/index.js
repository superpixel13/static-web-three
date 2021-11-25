import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { project, portfolio } from "../styles/projects.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark
  console.log(data)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Invest</h2>
          <h3>Buy & Hold</h3>
          <p>
            A team of experienced shillers and marketers behind the scenes
            working to make sure that this project is successful!
          </p>
          <a className={btn} href="https://pancakeswap.finance/profile">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "0.5rem" }}>Buy on Pancakeswap</div>
              <span>
                <img
                  src="/pancakeswap-cake-logo.png"
                  alt="pancake"
                  style={{ maxWidth: "2rem" }}
                />
              </span>
            </div>
          </a>
        </div>

        <Img
          style={{ maxWidth: "100%" }}
          alt="abstract-building"
          fluid={data.file.childImageSharp.fluid}
        />
      </section>
      <div className={portfolio} style={{ marginTop: "35vh" }}>
        <h2>Developed Projects</h2>
        <h3>Projects and Tokens We've Created</h3>
        <div className={project}>
          {nodes.map(item => (
            <div>
              <Img fluid={item.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{item.frontmatter.title}</h3>
              <p>{item.frontmatter.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "building.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
