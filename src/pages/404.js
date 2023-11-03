import React from "react"

// Components

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

const error = () => {
  return (
    <>
      <Layout></Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => <Seo title="404" description="Page not found!" />

export default error
