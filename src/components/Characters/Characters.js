import { useGet } from '../../customHooks/useHTTP'
import { Container, Row } from 'react-bootstrap'
import CardCharacter from '../CardCharacter'
import Loading  from '../Loading'
import './Characters.css'

const Characters = () => {
    const [characters, fetching, errors] = useGet('character')

    return ( 
        <Container>
            <Row>
                <h1>Personajes</h1>
                {fetching ? 
                    <Loading />
                :
                    characters.map((character) => (
                        <CardCharacter key={character.id} {...character} />
                    ))
                }
            </Row>
        </Container>
     );
}
 
export default Characters;