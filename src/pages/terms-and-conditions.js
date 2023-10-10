import React from "react"

// Components
import { Logo } from "../components/logo"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

// None lazy load images
import cookies from "../images/batch.png"

const Terms = () => {
  return (
    <>
      <Layout>
        <Logo title="Terms & Conditions" />
        <div className="about">
          <div className="container">
            <img src={cookies} width={350} alt="Just a bunch of coookies" />
            <p>Coming soon</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => (
  <Seo title="Terms & Conditions" description="Coming soon" />
)

export default Terms
