import * as React from "react"

import { Link } from "gatsby"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { GoogleRecaptcha } from "../components/reCaptcha"

export const ContactForm = ({ message, update }) => {
  return (
    <form method="post" className="form" action={`https://formspree.io/f/`}>
      <div className="form-group">
        <input
          name="name"
          className="form-control"
          type="text"
          pattern="([A-zÀ-ž\s]){1,}"
          placeholder="Full Name"
        />
        <label>Name</label>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          required
        />
        <label>Email</label>
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="telephone"
          className="form-control"
          placeholder="Telephone Number"
          pattern="^\+?\d{0,13}"
        />
        <label>Telephone</label>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="telephone"
          className="form-control"
          placeholder="Location"
        />
        <label>Location</label>
      </div>
      <div className="form-group form-group--textarea">
        <textarea
          name="message"
          placeholder="Message"
          className="form-control form-control--textarea"
          id="message"
          value={message}
          onChange={e => update(e.target.value)}
        />
        <label>Message</label>
      </div>
      <div className="form-group form-group--checkbox form-group--full">
        <input
          required
          id="agree"
          name="Terms & Conditions"
          type="checkbox"
          value="agree"
          className="form-control"
        />
        <div className="label">
          <label for="agree">
            I Agree to Paradise Cookies{" "}
            <Link to="/terms-and-conditions" target="_blank">
              Terms &amp; Conditions
            </Link>
          </label>
        </div>
      </div>
      <GoogleReCaptchaProvider
        useRecaptchaNet
        reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY as string}
        scriptProps={{ async: true, defer: true, appendTo: "body" }}
      >
        <GoogleRecaptcha />
      </GoogleReCaptchaProvider>
      <div className="form-group form-group--submit">
        <button className="button" type="submit">
          Send
        </button>
      </div>
    </form>
  )
}
