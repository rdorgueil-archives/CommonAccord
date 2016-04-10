// Libraries
import React, { PropTypes } from 'react'
import { Route, IndexRoute } from 'react-router'

// Local imports
import Layout from './example/components/Layout'
import Home from './example/components/Home'
import About from './example/components/About'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>
)

export default routes
