import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Characters from './components/Characters'
import Episodes from './components/Episodes'

function App() {
  return (
    <Router>
        <Nav />
        <Route path="/" exact component={Characters} />
        <Route path="/episodes" component={Episodes} />
    </Router>
  );
}

export default App;
