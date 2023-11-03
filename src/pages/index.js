import React from "react"

// Components
import { Navigation, Item } from "../components/navigation/navigation"
import { Dropdown, DropdownItem } from "../components/navigation/dropdown"

// Theme !REQUIRED!
import Layout from "../components/layout"
import Seo from "../components/seo"

// None lazy load images
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <>
      <Layout>
        <Navigation>
          <Item icon="home" />
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
        </Navigation>
        <div style={{ height: "100vh", background: "darkslateblue" }}></div>
        <div style={{ height: "100vh", background: "slateblue" }}></div>
      </Layout>
    </>
  )
}

// SEO Component !REQUIRED!
export const Head = () => <Seo title="Home" description="" />

export default Home
