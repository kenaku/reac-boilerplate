/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import Helmet from 'react-helmet'
// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css'
import 'react-mdl/extra/material.min.css'
import 'react-mdl/extra/material'
import Footer from 'components/Footer'
import styles from './styles.css'

const App = (props) =>
  <div className={styles.wrapper}>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
      meta={[
        {name: 'description', content: 'A React.js Boilerplate application'},
      ]}
    />
    {props.children}
    <Footer />
  </div>

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
