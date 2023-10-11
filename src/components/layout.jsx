import React from "react"

import { useAnayltics, usePageTracker } from "../utils/analytics"
import "../../src/scss/global.scss"
import "./layout.css"

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
              © {new Date().getFullYear()} &middot; Paradise Cookies
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Layout
