import logo from './logo.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// PAGES
import HomePage from './pages/home-page/HomePage'
// import './App.css'

// STYLES
import { AppContainer } from './app.style'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage}></Route>
    </Router>
  )
}

export default App
