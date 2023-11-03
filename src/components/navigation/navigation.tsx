import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import FeatherIcon from "feather-icons-react"

export const Navigation = ({ children }) => {
  return (
    <div className="menu-wrapper">
      <nav className="menu">
        <ul>{children}</ul>
      </nav>
    </div>
  )
}

export const Item = ({ name, icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.li whileTap={{ scale: 0.97 }}>
      <Link
        className="menu-item"
        to={"./"}
        title={name}
        activeClassName="active"
      >
        {icon && <FeatherIcon icon={icon} />}
        {name}
      </Link>
    </motion.li>
  )
}
