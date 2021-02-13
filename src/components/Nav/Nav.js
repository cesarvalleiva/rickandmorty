import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './Nav.css'

const Nav = () => {
    return ( 
        <Container fluid className="nav">
            <Container className="mb-4 nav">
                <img src="./images/rickandmorty.png" alt="Logo" className="logo" />
                <Link to="/" className="link">Home</Link>
                <Link to="/episodes" className="link">Episodes</Link>
            </Container>
        </Container>
     );
}
 
export default Nav;