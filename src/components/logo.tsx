import React from "react"
import { Link } from "gatsby"

// None lazy load images
import logoGIF from "../../src/images/logo.gif"

export const Logo = ({ title, button, url }) => (
  <>
    <div className="banner">
      <div className="brand">
        <img src={logoGIF} width="350" alt="Paradise Cookies Logo" />
        <h1>{title}</h1>
        {button && url && (
          <Link to={url} className="button" title="{button}">
            {button}
          </Link>
        )}
      </div>
    </div>
  </>
)
