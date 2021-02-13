import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Character.css'

const Character = (props) => {
    const {name, status, image, species, gender} = props.location.character;

    return ( 
        <Container className="mt-4">
            <Row>
                <h1>{name}</h1>
                <Col md={4}>
                    <img src={image} />
                </Col>
                <Col md={8}>
                    <p>Estado: {status === 'Alive' ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Unknown'}</p>
                    <p>Género: {gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
                    <p>Especie: {species === 'Human' ? 'Humano' : 'Alien'}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Link to='/'>
                        <Button type="button" variant="primary" className="mt-4" block>Volver</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Character;