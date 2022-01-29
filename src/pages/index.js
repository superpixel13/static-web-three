import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"
import { Fab, Grid } from "@mui/material"
import CardComponent from "../components/CardComponent"

export default function Home({ data }) {
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
        style={{
          backgroundColor: "#F1D593",
          maxWidth: "75rem",
          marginLeft: "0.1rem",
          borderRadius: "1rem",
        }}
      >
        <Grid item md={6} style={{ padding: "2rem" }}>
          <div>
            <h2 style={{ textShadow: "2px 2px 2px black" }}>
              Access the power of the blockchain.
            </h2>
            {/* <h3></h3> */}
            <p style={{ textTransform: "capitalize", color: "#332300" }}>
              <span style={{ color: "#896001", fontWeight: "bold" }}>
                {tokenInfo.title}
              </span>{" "}
              is a decentralized marketing platform that allows merchants and
              affiliates to participate.
            </p>
            {/* <a
              style={{ marginRight: "1rem" }}
              className={btn}
              href="https://twitter.com/SonOfcat_C?s=20"
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
            </a> */}

            <a
              style={{ backgroundColor: "#17838D" }}
              className={btn}
              href="pancakeswap"
              // href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x4b3260056bb8271dc9a01bd4c1f33821110b5443"
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
          <Fab
            style={{
              backgroundColor: "#80C9EC",
              marginTop: "2rem",
            }}
            href="https://t.me/OsakaInu2K22"
          >
            <img
              src="/telegramlogo.png"
              alt="pancake"
              style={{ maxWidth: "2rem" }}
            />
          </Fab>
          {/* <Fab
            color="primary"
            style={{ margin: "1rem" }}
            href="https://twitter.com/SonOfcat_C?s=20"
          >
            <img
              src="/twitter.png"
              alt="twitter"
              style={{ maxWidth: "2.2rem" }}
            />
          </Fab> */}
        </Grid>
        <Grid item md={6}>
          <Img
            style={{ maxWidth: "30rem", marginLeft: "2rem" }}
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
        style={{ textAlign: "center", marginTop: "20vh", marginBottom: "40vh" }}
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
          {fillers.map((item, index) => (
            <Grid
              key={index}
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
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "osakainu.jpg" }) {
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
