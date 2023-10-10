import React from "react"

// Components
import { Logo } from "../components/logo"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

const error = () => {
  return (
    <>
      <Layout>
        <Logo title="404!" button="Return home" url="/" />
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => <Seo title="404" description="Page not found!" />

export default error
