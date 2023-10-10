import React from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"

export const ProductSlider = ({ callback }) => {
  var settings = {
    accessibility: false,
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    touchThreshold: 50,
    infinite: true,
    cssEase: "linear",
    variableWidth: true,
  }

  function handleMessage(value) {
    callback(value)
  }

  return (
    <Slider {...settings}>
      <div>
        <div className="product-wrap">
          <StaticImage
            src="../images/products/chocolate.png"
            alt="Classic Chocolate"
            placeholder="blurred"
            width={280}
            height={280}
          />
          <div className="product">
            <div className="name">
              Classic <br />
              Chocolate
            </div>
            <button
              onClick={() => handleMessage("Classic Chocolate")}
              className="button"
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="product-wrap">
          <StaticImage
            src="../images/products/blueberry.png"
            alt="Blueberry Crumble"
            placeholder="blurred"
            width={280}
            height={280}
          />
          <div className="product">
            <div className="name">
              Blueberry <br />
              Crumble
            </div>
            <button
              onClick={() => handleMessage("Blueberry Crumble")}
              className="button"
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="product-wrap">
          <StaticImage
            src="../images/products/blank.png"
            alt="Choc Raspberry"
            placeholder="blurred"
            width={280}
            height={280}
          />
          <div className="product">
            <div className="name">
              CHOC <br />
              Raspberry
            </div>
            <button
              onClick={() => handleMessage("CHOC Raspberry")}
              className="button"
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="product-wrap">
          <StaticImage
            src="../images/products/cream.png"
            alt="Cookies 'n' Cream"
            placeholder="blurred"
            width={280}
            height={280}
          />
          <div className="product">
            <div className="name">
              Cookies 'n' <br />
              Cream
            </div>
            <button
              onClick={() => handleMessage("Cookies 'n' Cream")}
              className="button"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </Slider>
  )
}
