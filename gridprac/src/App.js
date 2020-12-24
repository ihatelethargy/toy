import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/header/Header'
import Contents from './pages/Contents'
import Main from './pages/Main'
import ContentMaker from './pages/ContentMaker'

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Route exact path="/newcontent" component={ContentMaker} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contents" component={Contents} />
      </Switch>
    </Router>
  )
}

export default App
