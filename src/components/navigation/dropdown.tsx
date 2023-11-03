import React, { useState, useRef } from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "gatsby"
import FeatherIcon from "feather-icons-react"
import OutsideClickHandler from "react-outside-click-handler"

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export const Dropdown = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.li initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.button className="menu-item" onClick={() => setIsOpen(!isOpen)}>
        {name} <FeatherIcon icon="chevron-down" />
      </motion.button>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          {children}
        </OutsideClickHandler>
      </motion.ul>
    </motion.li>
  )
}

export const DropdownItem = ({ name, to }) => {
  return (
    <motion.li variants={itemVariants} whileTap={{ scale: 0.97 }}>
      <Link to={to} title={name} className="menu-item">
        {name}
      </Link>{" "}
    </motion.li>
  )
}
