import React from "react"
import Navbar from "./Navbar"
import Particles from "react-tsparticles"
import "../styles/global.css"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <div
        className="layout"
        style={{ padding: "2rem", position: "relative", zIndex: 1 }}
      >
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p>Copyright 2021 {data.site.siteMetadata.title}</p>
        </footer>
      </div>
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 70,
              limit: 100,
              density: {
                enable: true,
                value_area: 50,
              },
            },
            color: {
              value: "#F1D593",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 20,
                color: "#F1D593",
              },
              polygon: {
                nb_sides: 1,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: true,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          // interactivity: {
          //   detect_on: "canvas",
          //   events: {
          //     onHover: {
          //       enable: true,
          //       mode: "bubble",
          //       parallax: {
          //         enable: false,
          //         force: 60,
          //         smooth: 10,
          //       },
          //     },
          //     onClick: {
          //       enable: true,
          //       mode: "push",
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     grab: {
          //       distance: 400,
          //       lineLinked: {
          //         opacity: 1,
          //       },
          //     },
          //     bubble: {
          //       distance: 400,
          //       size: 100,
          //       duration: 2,
          //       opacity: 1,
          //       speed: 2,
          //     },
          //     repulse: {
          //       distance: 200,
          //     },
          //     push: {
          //       particles_nb: 4,
          //     },
          //     remove: {
          //       particles_nb: 2,
          //     },
          //   },
          // },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 165,
                  g: 144,
                  b: 39,
                },
              },
            },
          },
          retina_detect: true,
          fps_limit: 60,
        }}
      />
    </div>
  )
}

export default Layout
