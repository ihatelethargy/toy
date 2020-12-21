import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Contents.scss'
import ContentsDetail from './ContentsDetail'
import ContentsList from './ContentsList'

function Contents() {
  return (
    <Switch>
      <Route exact path="/contents" component={ContentsList} />
      <Route path="/contents/:id" component={ContentsDetail} />
    </Switch>
  )
}

export default Contents
