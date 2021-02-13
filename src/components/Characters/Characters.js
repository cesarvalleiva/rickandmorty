import { useGet } from '../../customHooks/useHTTP'
import Character from '../Character'
import { Row } from 'react-bootstrap'
import './Characters.css'

const Characters = () => {
    const [characters, fetching, errors] = useGet('character')

    return ( 
        <Row>
            {fetching ? 
                <h1>Cargando</h1>
            :
                characters.map((character) => (
                    <Character key={character.id} {...character} />
                ))
            }
        </Row>
     );
}
 
export default Characters;