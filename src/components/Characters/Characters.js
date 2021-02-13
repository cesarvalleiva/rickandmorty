import { useGet } from '../../customHooks/useHTTP'
import Character from '../Character'
import { Container, Row } from 'react-bootstrap'
import './Characters.css'

const Characters = () => {
    const [characters, fetching, errors] = useGet('character')

    return ( 
        <Container>
            <Row>
                {fetching ? 
                    <h1>Cargando</h1>
                :
                    characters.map((character) => (
                        <Character key={character.id} {...character} />
                    ))
                }
            </Row>
        </Container>
     );
}
 
export default Characters;