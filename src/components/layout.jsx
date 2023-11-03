import React from "react"

// Components
import { Navigation, Item } from "../components/navigation/navigation"
import { Dropdown, DropdownItem } from "../components/navigation/dropdown"
import { useAnayltics, usePageTracker } from "../utils/analytics"
import "../../src/scss/global.scss"

const Layout = ({ children }) => {
  useAnayltics()
  usePageTracker()

  return (
    <>
      <div>
        <main>
          <Navigation>
            <Item icon="home" path="/" />
            <Item name="About" path="/about" />
            <Dropdown name={"Dropdown"}>
              <DropdownItem name={"This is a Link Name"} to={"/somewhere"} />
              <DropdownItem name={"Link Name"} to={"/somewhere"} />
              <DropdownItem name={"Link Name"} to={"/somewhere"} />
              <DropdownItem name={"Link Name"} to={"/somewhere"} />
            </Dropdown>
            <Dropdown name={"Second Dropdown"}>
              <DropdownItem
                name={"This is the cooler dropdown"}
                to={"/somewhere"}
              />
              <DropdownItem name={"Link Name"} to={"/somewhere"} />
              <DropdownItem name={"Link Name"} to={"/somewhere"} />
            </Dropdown>
            <Item name="Contact me" path="/contact" />
          </Navigation>
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
