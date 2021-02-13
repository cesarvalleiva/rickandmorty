import { BrowserRouter as Router, Route } from 'react-router-dom'
import Characters from './components/Characters'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
        <Nav />
        <Route path="/" exact component={Characters} />
        <Route path="/otro" component={Characters} />
    </Router>
  );
}

export default App;
