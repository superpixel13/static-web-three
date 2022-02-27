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
        "Community driven & fair launch. Dev burned 90% supply and add 20% to LP on Pancakeswap. Burn 100% LP tokens and Renounce Ownership. Funds 100% SAFU",
    },
    {
      title: "Automatic Liquidity Pool",
      description: `8% of every transaction goes to liquidity on PancakeSwap which will benefit for ${tokenInfo.title}'s Coin holders`,
    },
    {
      title: "Marketing",
      description: "10% is devoted towards marketing.",
    },
    {
      title: "Anti Whale Dump",
      description:
        "Sell and buy transaction that trade more than 0.05% of the total supply will be rejected. This will prevent whales to pump and dump",
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
          backgroundColor: "#040A1A",
          maxWidth: "75rem",
          marginLeft: "0.1rem",
          borderRadius: "1rem",
        }}
      >
        <Grid item md={6} style={{ padding: "2rem" }}>
          <div>
            <h3 style={{ textShadow: "2px 2px 2px black" }}>
              Invest in the Future and the Power of the blockchain.
            </h3>
            <p style={{ textTransform: "capitalize", color: "white" }}>
              <span style={{ color: "#AE903F", fontWeight: "bold" }}>
                {tokenInfo.title}
              </span>
              's main goal is to bring million of new retail investors to crypto
              by eliminating all fiat obstacles on the way to crypto.
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
            href="https://web.telegram.org/z/"
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
            style={{
              maxWidth: "30rem",
              marginLeft: "2rem",
              borderRadius: "15rem",
            }}
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
        <Grid item xs={12} style={{ marginBottom: "10rem" }}>
          <h2 style={{ textShadow: "2px 2px 2px black", marginBottom: "2rem" }}>
            Welcome to {tokenInfo.title}!
          </h2>
          <CardComponent
            title={`${tokenInfo.title} Project is a platform in the world of decentralized finance (DeFi) or non-middleman financial intermediaries. The project will focus on memecoins, or micro-cap tokens, as well as being an all-in-one platform for both whom looking to invest in these tokens and new developers who want to advertise their own projects.`}
          />

          {/* <div>
            <video
              autoPlay
              loop
              muted
              style={{
                borderRadius: "2.1rem 2rem 2.1rem",
                width: "80%",
                objectFit: "contain",
              }}
            >
              <source type="video/mp4" src="/osakainu2k22Video.mp4"></source>
            </video>
          </div> */}
        </Grid>
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
    file(relativePath: { eq: "tiger-charm.jpg" }) {
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
