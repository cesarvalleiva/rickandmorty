import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Characters from './components/Characters'
import Character from './components/Character'
import Episodes from './components/Episodes'
import './App.css'

function App() {
  return (
    <Router>
        <Nav />
        <Route path="/" exact component={Characters} />
        <Route path="/character/:id" component={Character} />
        {/* <Route path="/character/:id">
          <Character name={Character} />
        </Route> */}
        <Route path="/episodes" component={Episodes} />
    </Router>
  );
}

export default App;
