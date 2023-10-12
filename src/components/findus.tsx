import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const FindUs = () => {
  return (
    <div className="findus">
      <div className="container container--small">
        <h2>Find Us</h2>
        <p>
          Vegan Night Mākete at Phillipstown community Center the last saturday
          of every month. 5 - 8 pm
        </p>
        <StaticImage
          src="../images/location.png"
          alt="Find us"
          placeholder="blurred"
          width={367}
        />
        <div>
          <Link
            className="button"
            target="_blank"
            title="Get Directions"
            to="https://www.google.com/maps/dir//Vegan+Night+M%C4%81kete,+Nursery+Road,+Phillipstown,+Christchurch/@-43.5379356,172.6148758,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6d3189f2de1cd075:0x10a910bee33af82c!2m2!1d172.6560752!2d-43.5380052!3e0?entry=ttu"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </div>
  )
}
