import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

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
        <Logo title="Paradise Cookies" />
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
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Orders require a minimum of 3 days notice as they made to order.
              Pick up is available however i can also offer delivery on Mondays
              and Tuesdays.
            </p>
            <p>
              <span>
                There will just be an additional delivery cost depending on
                where you are in Christchurch.
              </span>
            </p>
            <ContactForm message={message} update={setMessage} />
          </div>
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
