import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { project, portfolio } from "../styles/projects.module.css"
import Img from "gatsby-image"
import { Grid } from "@mui/material"

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark
  console.log(data)

  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={header}
        spacing={4}
      >
        <Grid item md={6}>
          <div>
            <h2>Invest</h2>
            <h3>Hold & Gain</h3>
            <p style={{ textTransform: "capitalize" }}>
              We are excited to announce our new token! Kishubonk! Gain BNB as
              you hold and wait! watch as our token soar high through the clouds
              and break through the orbit!
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
        </Grid>
        <Grid item md={6}>
          <Img
            style={{ maxWidth: "100%" }}
            alt="abstract-building"
            fluid={data.file.childImageSharp.fluid}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ textAlign: "center", marginTop: "40vh" }}
      >
        <Grid item style={{ marginBottom: "2rem" }}>
          <h2>Developed Projects</h2>
          <h3 style={{ lineHeight: "4rem" }}>
            Projects and Tokens We've Created
          </h3>
        </Grid>
        <Grid
          container
          spacing={4}
          item
          justifyContent="center"
          style={{
            width: "100%",
            objectFit: "contain",
            textAlign: "center",
          }}
        >
          {nodes.map(item => (
            <Grid item xs={12} style={{ maxWidth: "30rem" }}>
              <Img
                style={{ borderRadius: "3rem" }}
                fluid={item.frontmatter.thumb.childImageSharp.fluid}
              />
              <h3 style={{ marginTop: "1rem" }}>{item.frontmatter.title}</h3>
              <p>{item.frontmatter.stack}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>
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
