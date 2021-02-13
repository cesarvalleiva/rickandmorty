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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Character;