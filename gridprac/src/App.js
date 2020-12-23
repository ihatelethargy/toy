import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/header/Header'
import Contents from './pages/Contents'
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contents" component={Contents} />
      </Switch>
    </Router>
  )
}

export default App
