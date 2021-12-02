import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { project, portfolio } from "../styles/projects.module.css"
import Img from "gatsby-image"
import { Grid } from "@mui/material"

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark

  const fillers = [
    {
      title: "Safe & Secure",
      description:
        "Liquidity will be fully locked and 1% of every buy will go to the Liquidity",
    },
    {
      title: "Passive Income",
      description:
        "1% Reflection Rewards will be distributed on each transaction fee based on the share of the buffed billionaire maker",
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
            <h2>Buy</h2>
            <h3>Hold & Gain</h3>
            <p style={{ textTransform: "capitalize" }}>
              We are excited to announce our new token!{" "}
              <span style={{ color: "#fd746c", fontWeight: "bold" }}>
                Buffed Billionaire Maker!{" "}
              </span>
              Gain BNB as you hold and wait! watch as our token soar high
              through the clouds and break through the orbit!
            </p>
            <a
              className={btn}
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x86160023E2A324E1714a2c61147aEf06D0175267"
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
            style={{ maxWidth: "100%" }}
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
                height: "30vh",
                backgroundColor: "#C02425",
                borderRadius: "1rem",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
    file(relativePath: { eq: "money.png" }) {
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
