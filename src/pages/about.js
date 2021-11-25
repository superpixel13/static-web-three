import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const about = ({ data }) => {
  console.log(data)
  const tokenData = data.allSite.nodes[0].siteMetadata
  const tokenomics = [
    "Verified Contract",
    "Tokenomics: 13% Tax ( 8% Back to the Liquidity Pool, 5% Redistributed to Holders)",
    "Total Supply: 1,000,000,000,000,000",
    "Max Buy 1,000,000",
    "Auto add Liquidity",
    "3% Team wallet",
    "5% Marketing Fund",
    "50% Burnt Supply",
    " Liquidity Lock",
  ]
  return (
    <Layout>
      <div style={{ padding: "2rem", textTransform: "capitalize" }}>
        <h2 style={{ textAlign: "center" }}>Introduction</h2>
        <br />

        <h4>
          <br />
          Want to deploy a coin but don't have capital yet? Tired of always
          getting rugged/scammed? The world of BSC tokens is a crazy place
          filled with rug pulls and all sorts of nasty scams. Sick and tired of
          the endless nonsense, Our mission is simple, reward normal buyers with
          great gains and avoid whales at all costs by using anti-whale
          tokenomics.
        </h4>

        <h4>
          <br />
          We are a team of experienced marketers behind the scenes working to
          make sure that this project is successful, and that our early adopters
          can get the most gains out of it! This project definitely stands a
          good chance of making exponential profits for those who buy in now.
        </h4>
      </div>

      <h2 style={{ textAlign: "center" }}>{tokenData.title}'s Tokenomics</h2>
      <section style={{ padding: "2rem" }}>
        {tokenomics.map(item => (
          <div>
            <p>&#x2705; {item}</p>
          </div>
        ))}
      </section>
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
