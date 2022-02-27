import { Grid, Slider } from "@mui/material"
import { graphql } from "gatsby"
import React, { useState } from "react"
import CardComponent from "../components/CardComponent"
import Layout from "../components/Layout"

const About = ({ data }) => {
  const [value, setValue] = useState(0)
  const tokenData = data.allSite.nodes[0].siteMetadata
  const tokenomics = [
    "Verified Contract",
    "Tokenomics: 13% Tax ( 8% Back to the Liquidity Pool, 5% Redistributed to Holders)",
    "Total Supply: 1,000,000,000,000,000",
    "Coinshunt listing",
    "Lock Liquidity on Mudra",
    "Trend in Dextools",
    "Coinmarketcap Listing",
    "Coingecko Listing",
    "Continuous Marketing with Infuencers",
    "Auto add Liquidity",
    "8% Team wallet",
    "10% Marketing Fund",
    "50% Liquidity Burn",
    "42% pancakeswap",
    "Liquidity Lock",
  ]

  return (
    <Layout>
      <div
        style={{
          padding: "2rem",
          textTransform: "capitalize",
          backgroundColor: "#273c75",
          maxWidth: "75rem",
          marginLeft: "0.1rem",
          borderRadius: "1rem",
          color: "black",
        }}
      >
        <h2 style={{ textAlign: "center", textShadow: "2px 2px 2px black" }}>
          Introductions
        </h2>
        <br />

        <p>
          <br />
          Want to deploy a coin but don't have capital yet? Tired of always
          getting rugged/scammed? The world of BSC tokens is a crazy place
          filled with rug pulls and all sorts of nasty scams. Sick and tired of
          the endless nonsense, Our mission is simple, reward normal buyers with
          great gains and avoid whales at all costs by using anti-whale
          tokenomics.
        </p>

        <p>
          <br />
          We are a team of experienced marketers behind the scenes working to
          make sure that this project is successful, and that our early adopters
          can get the most gains out of it! This project definitely stands a
          good chance of making exponential profits for those who buy in now.
        </p>

        <p>
          <br />
          Our project has a solid tech with self-enhancing mechanisms leading to
          exponential growth and we aim to elevate the entire community to to
          financial freedom, we have different developers around the globe to
          support our vision. we are more than a community, so join us and be
          part of our team!
        </p>
        <hr style={{ margin: "2rem 0" }} />
        <h2
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            marginTop: "2rem",
            textShadow: "2px 2px 2px black",
          }}
        >
          {tokenData.title}'s Tokenomics
        </h2>
        <section style={{ padding: "1rem" }}>
          {tokenomics.map((item, index) => (
            <div key={index}>
              <p>&#x2705; {item}</p>
            </div>
          ))}
        </section>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3>Roadmap</h3>
        <p>Initial Plan for {tokenData.title}</p>
        <Grid
          container
          style={{
            position: "relative",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -5%)",
            width: "50%",
          }}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <CardComponent
              title={
                value === 0
                  ? "Preperation"
                  : value === 10
                  ? "Preperation"
                  : value === 20
                  ? "Initial Launch"
                  : value === 30
                  ? "Coingecko Listing"
                  : value === 40
                  ? "Coins Hunt Listing"
                  : value === 50
                  ? "Dexxtools Listing"
                  : "Launchpool Rewards"
              }
            />
          </Grid>
        </Grid>

        <Slider
          aria-label="Token Roadmap"
          defaultValue={0}
          // getAriaValueText={valuetext}
          // valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={60}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query MyQuery {
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
  }
`
