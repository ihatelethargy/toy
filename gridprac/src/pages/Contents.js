import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContentDetail from './ContentDetail'
import ContentsList from './ContentsList'

function Contents() {
  return (
    <Switch>
      <Route exact path="/contents" component={ContentsList} />
      <Route path="/contents/:id" component={ContentDetail} />
    </Switch>
  )
}

export default Contents
