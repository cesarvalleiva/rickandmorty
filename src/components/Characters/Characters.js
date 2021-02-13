import{ useState, useEffect } from 'react'
import Character from '../Character'
import { Row } from 'react-bootstrap'
import './Characters.css'

const BASE_URL = 'https://rickandmortyapi.com/api'

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [errors, setErrors] = useState(false)

    const getCharacters = async (endpoint) => {
        try {
            const result = await fetch(`${BASE_URL}/${endpoint}`);
            const data = await result.json()
            setCharacters(data.results)
            setFetching(false)
        } catch (error) {
            setCharacters([])
            setFetching(false)
            setErrors(true)
        }
        
    }

    useEffect(() => {
        getCharacters('character')
    }, [])

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