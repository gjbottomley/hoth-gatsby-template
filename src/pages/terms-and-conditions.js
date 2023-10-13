import React from "react"

// Components
import { Logo } from "../components/logo"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

// None lazy load images
import cookies from "../images/batch.png"

const Terms = () => {
  return (
    <>
      <Layout>
        <Logo title="Terms & Conditions" button="Return home" url="/" />
        <div className="about">
          <div className="container">
            <img
              src={cookies}
              width={350}
              height={85}
              alt="Just a bunch of coookies"
            />
            <p>Paradisecookies.co.nz, quack@paradisecookies.co.nz</p>

            <p>
              <strong>Delivery Costs:</strong> The bakery is located in Avonhead
              and so delivery costs will depend on how far away the customer is
              to the bakery. A set list of delivery prices is currently being
              worked on. For now the base price for delivery is $5.
            </p>

            <p>
              Upon delivery there will be a photo taken and sent to the customer
              as proof of delivery. A safe place for delivery can be arranged
              with the customer beforehand.
            </p>

            <p>
              <strong>Order Pick up:</strong> If a customer does not pick up
              their order on the agreed upon day, staff will contact the
              customer to remind them of pick up.
            </p>
            <p>
              If the customer responds to contact there may be some solution,
              eg: Pick up the next day etc. If a customer fails to respond
              within an hour of closing time at the market they are picking up
              from, the product will be put back on sale to avoid wastage of
              food.
            </p>
            <p>
              On the occasion of bank transfer being the form of payment: If a
              customer does not pick up thier order and does not contact or
              accept contact from staff it is assumed that they are not coming
              to collect the order. In this case, staff will keep the customers
              order for the next days market if there is one occuring and they
              are able to pick it up then. However, if this is not the case
              there will be no refund given as it is up to the customer to
              collect their purchase on the agreed upon day.
            </p>
            <p>
              If the customer does accept/ contact staff and are not able to
              pick up their order, staff are able to keep their order for next
              day pick up if there is a market on the next day. However, the
              order will be the same cookies, they will not be replaced with
              fresh ones. If there is no market the next day it is possible for
              staff to deliver the order to the customer, however the customer
              will have to pay for the delivery costs.
            </p>

            <p>
              <strong>Complaints:</strong> Should a customer feel the need to
              complain about a product, please email quack@paradisecookies.co.nz
              or message directly through the Oficialparadisecookies Instagram
              account.
            </p>

            <p>
              <strong>Online Shopping:</strong> Currently Paradise Cookies does
              not accept online payments. Bank transfer is available to
              instagram orders.
            </p>

            <p>
              ParadiseCookies.co.nz does take some personal information such as,
              Name, Phones number, Email and location. The location is just to
              make sure the customer lives in Christchurch as we do not offer
              post delivery yet. A phone number is required for orders, so staff
              can contact the customer if an issue occurs.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => <Seo title="Terms & Conditions" description="" />

export default Terms
