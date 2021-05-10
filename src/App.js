import logo from './logo.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// PAGES
import HomePage from './pages/home-page/HomePage'
import GifPage from './pages/gifPage/GifPage'
// import './App.css'

// STYLES
// import { AppContainer } from './app.style'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/gif/:name' component={GifPage} />
    </Router>
  )
}

export default App
