import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Footer from 'layout/Footer'
import Header from 'layout/Header'
const WebLayout = ({ children }) => (
  <>
    <Header />
    <body>{children}</body>
    <Footer />
  </>
)

WebLayout.propType = {
  children: PropTypes.node.isRequired,
}

export default memo(WebLayout)
