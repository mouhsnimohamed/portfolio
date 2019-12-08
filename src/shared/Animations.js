import React from "react"
import { motion } from "framer-motion"

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", /*stiffness: 20,*/ damping: 50 },
  },
}

export const variants2 = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.2, damping: 50 },
  },
}

export const FramerAnimator = ({ children, ...rest }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={defaultVariants}
    {...rest}
  >
    {children}
  </motion.div>
)
