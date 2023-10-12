import React from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"
import * as Icon from "react-feather"

export const ProductSlider = ({ callback }) => {
  var settings = {
    accessibility: false,
    centerMode: true,
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: true,
    touchThreshold: 50,
    infinite: true,
    cssEase: "linear",
    variableWidth: true,
    prevArrow: <Icon.ChevronLeft color="white" size={50} />,
    nextArrow: <Icon.ChevronRight color="white" size={50} />,
  }

  function handleMessage(value) {
    callback(value)
  }

  return (
    <div className="container container--large">
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
              src="../images/products/blank.png"
              alt="Biscoff Crunch"
              placeholder="blurred"
              width={280}
              height={280}
            />
            <div className="product">
              <div className="name">
                Biscoff <br />
                Crunch
              </div>
              <button
                onClick={() => handleMessage("Biscoff Crunch")}
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
    </div>
  )
}
