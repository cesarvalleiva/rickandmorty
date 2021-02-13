import { Link } from 'react-router-dom'
import moment from 'moment'
import { Col, Card, Button } from 'react-bootstrap'
import './Episode.css'

const Episode = ({ name, air_date, episode}) => {
    return ( 
        <>
        <Col>
            <Card style={{ width: '18rem' }} className="mb-3 card-episode">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {moment(air_date).format("D/MM/YY")} - Episodio: {episode}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </>
     );
}
 
export default Episode;