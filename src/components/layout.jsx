import React from "react"

import { useAnayltics, usePageTracker } from "../utils/analytics"
import "../../src/scss/global.scss"

const Layout = ({ children }) => {
  useAnayltics()
  usePageTracker()

  return (
    <>
      <div>
        <main>
          {children}

          <footer>
            <div className="container">
              © {new Date().getFullYear()} &middot; {process.env.GATSBY_NAME}
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Layout
