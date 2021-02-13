import { Link } from 'react-router-dom'
import { Col, Card, Button } from 'react-bootstrap' 
import './CardCharacter.css'

const Character = (character) => {
    return ( 
        <Col className="mb-4">
            <Card style={{ width: '18rem' }} className="card-character">
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                    {character.status} - {character.species} - {character.gender}
                    </Card.Text>
                    <Link to={{
                        pathname:`/character/${character.id}`,
                        character: {...character}
                    }}>
                        <Button type="button" variant="success" block>Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Character;