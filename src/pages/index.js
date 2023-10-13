import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse"

// Components
import { ProductSlider } from "../components/products"
import { FindUs } from "../components/findus"
import { ContactForm } from "../components/form"
import { Logo } from "../components/logo"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

// None lazy load images
import cookies from "../images/batch.png"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  // Contact form textarea state
  const [message, setMessage] = useState("")

  function callbackFunction(message) {
    // Sets conact form textarea value to:
    setMessage("I'd like to order some \"" + message + '" cookies please.')

    // Scrolls to contact form
    scrollTo("#contact", "center")
  }

  return (
    <>
      <Layout>
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.1}
          className="parallax"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.3} className="cookies">
            <Logo title="Paradise Cookies" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className="about">
          <div className="container">
            <img src={cookies} width={350} alt="Just a bunch of cookies" />
            <h2>About us</h2>
            <p>
              Classic cookies, naturally vegan and free of added preservatives.
              A range of different flavours to chose from and i am continuously
              experimenting with new flavours.
            </p>
          </div>
        </div>
        <div className="products">
          <div className="container">
            <h2>Our Products</h2>
          </div>
          <div className="slide-wrapper">
            <ProductSlider callback={callbackFunction} />
          </div>
        </div>
        <FindUs />
        <div className="contact" id="contact">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.1}
            className="parallax"
          >
            <div className="container">
              <h2>Contact Us</h2>
              <a
                href="mailto:quack@paradisecookies.co.nz"
                title="quack@paradisecookies.co.nz"
                class="email"
              >
                quack@paradisecookies.co.nz
              </a>
              <p>
                Orders require a minimum of 3 days notice as they made to order.
                Pick up is available however i can also offer delivery on
                Mondays and Tuesdays.
              </p>
              <p>
                <span>
                  There will just be an additional delivery cost depending on
                  where you are in Christchurch.
                </span>
              </p>
              <ContactForm message={message} update={setMessage} />
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.3}
                className="cookies"
              >
                <StaticImage
                  src="../images/cookies.png"
                  alt="Paradise Cookies"
                  placeholder="blurred"
                  width={500}
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.1}
                className="cookie"
              >
                <StaticImage
                  src="../images/cookie.png"
                  alt="Paradise Cookie"
                  placeholder="blurred"
                  width={350}
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>
        </div>
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => (
  <Seo
    title="Home"
    description="Classic cookies, naturally vegan and free of added preservatives."
  />
)

export default Home
