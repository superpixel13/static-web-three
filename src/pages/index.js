import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"
import { Grid } from "@mui/material"
import CardComponent from "../components/CardComponent"

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark
  const tokenInfo = data.allSite.nodes[0].siteMetadata

  const fillers = [
    {
      title: "Safe & Secure",
      description:
        "Liquidity will be fully locked and 1% of every buy will go to the Liquidity",
    },
    {
      title: "Passive Income",
      description: `1% Reflection Rewards will be distributed on each transaction fee based on the share of this token ${tokenInfo.title}`,
    },
    {
      title: "Marketing",
      description: "10% is devoted towards marketing.",
    },
  ]
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
            <h2>Ape In</h2>
            <h3>Gain as you wait</h3>
            <p style={{ textTransform: "capitalize" }}>
              Welcome to{" "}
              <span style={{ color: "#fd746c", fontWeight: "bold" }}>
                {tokenInfo.title}
              </span>
              ! Our coin is more than a token, it is a mantra uttered by
              degenerates and our followers all around our community! It’s about
              manifesting your wildest crypto gains into reality.
            </p>
            <a
              style={{ marginRight: "1rem" }}
              className={btn}
              href="twitter.com"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "0.5rem" }}>Check us on twitter</div>
                <span>
                  <img
                    src="/twitter.png"
                    alt="twitter"
                    style={{ maxWidth: "2.2rem" }}
                  />
                </span>
              </div>
            </a>
            <a
              style={{ backgroundColor: "#6338AC" }}
              className={btn}
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=token"
            >
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
            style={{ maxWidth: "30rem" }}
            alt="abstract-building"
            fluid={data.file.childImageSharp.fluid}
          />
        </Grid>
      </Grid>
      {/* Section 1 */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ textAlign: "center", marginTop: "40vh" }}
      >
        <Grid item style={{ marginBottom: "2rem" }}>
          <h2 style={{ textTransform: "capitalize" }}>What our token offers</h2>
          <hr
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          style={{
            width: "100%",
            objectFit: "contain",
            textAlign: "center",
          }}
        >
          {fillers.map(item => (
            <Grid
              item
              xs={12}
              style={{
                maxWidth: "20rem",
                opacity: "0.8",
                margin: "1rem",
              }}
            >
              <CardComponent
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Section 2 */}
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
    file(relativePath: { eq: "cat.png" }) {
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
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
  }
`
