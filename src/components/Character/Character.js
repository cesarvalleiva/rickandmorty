import { Link } from 'react-router-dom'
import { Col, Card, Button } from 'react-bootstrap' 
import './Character.css'

const Character = ({name, status, species, gender, image}) => {
    return ( 
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {status} - {species} - {gender}
                    </Card.Text>
                    <Link to='/id'>
                        <Button type="button" variant="success" block>Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Character;