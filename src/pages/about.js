import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const about = ({ data }) => {
  const tokenData = data.allSite.nodes[0].siteMetadata
  const tokenomics = [
    "Verified Contract",
    "Tokenomics: 13% Tax ( 8% Back to the Liquidity Pool, 5% Redistributed to Holders)",
    "Total Supply: 1,000,000,000,000,000",
    "Max Buy 1,000,000",
    "Auto add Liquidity",
    "3% Team wallet",
    "5% Marketing Fund",
    "2% Liquidity Burn",
    " Liquidity Lock",
  ]

  const valueText = value => {
    return `${value}°C`
  }
  return (
    <Layout>
      <div style={{ padding: "2rem", textTransform: "capitalize" }}>
        <h2 style={{ textAlign: "center" }}>Introduction</h2>
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
      </div>

      <h2 style={{ textAlign: "center", textTransform: "capitalize" }}>
        {tokenData.title}'s Tokenomics
      </h2>
      <section style={{ padding: "2rem" }}>
        {tokenomics.map(item => (
          <div>
            <p>&#x2705; {item}</p>
          </div>
        ))}
      </section>
      {/* <section>
        <Slider
          aria-label="Temperature"
          defaultValue={20}
          disabled
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          getAriaValueText={valueText}
        />
      </section> */}
    </Layout>
  )
}

export default about

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
