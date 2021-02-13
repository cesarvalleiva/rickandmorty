import { useGet } from '../../customHooks/useHTTP'
import { Container, Row } from 'react-bootstrap'
import Loading from '../Loading';
import Episode from '../Episode'
import './Episodes.css'

const Episodes = () => {
    const [episodes, fetching, errors] = useGet('episode')
    return ( 
        <Container>
            <Row>
                <h1>Episodios</h1>
                {fetching ?
                    <Loading />
                : 
                    episodes.map((episode) => (
                        <Episode key={episode.id} {...episode} />
                    ))
                }
            </Row>
        </Container>
    );
}
 
export default Episodes;