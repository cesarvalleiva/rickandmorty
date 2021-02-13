import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './Nav.css'

const Nav = () => {
    return ( 
        <Container className="mb-4">
            <Link to="/">Home</Link>
        </Container>
     );
}
 
export default Nav;