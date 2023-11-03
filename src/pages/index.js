import React from "react"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

// None lazy load images
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <>
      <Layout>
        <div style={{ height: "100vh", background: "darkslateblue" }}></div>
        <div style={{ height: "100vh", background: "slateblue" }}></div>
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => <Seo title="Home" description="" />

export default Home
