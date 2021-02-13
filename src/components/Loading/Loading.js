import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from 'react-bootstrap'
import './Loading.css'

const Loading = () => {
    return ( 
        <Container className="d-flex justify-content-center align-items-center container-loading">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </Container>
     );
}
 
export default Loading;