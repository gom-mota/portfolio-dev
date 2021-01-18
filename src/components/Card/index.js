import { Main, Container, Description, Tecnologies } from './styles';
import Badge from '../Badge';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Card = (props) => {
    return (
        <Main size={props.size}>
                <img src={props.img} />
                <Container>
                    <h1>{props.name}</h1>
                    <a href={props.url}>Ver detalhes <i><FaExternalLinkAlt/></i></a>
                    <Description>{props.description}</Description>
                    <h1>{props.subtitle}</h1>
                    <Tecnologies>
                    {props.languages.map((language) => {
                        return <Badge>{language}</Badge>
                    })}
                     {props.libraries.map((librarie) => {
                        return <Badge>{librarie}</Badge>
                    })}
                    </Tecnologies>
                </Container>            
        </Main>
    )
}

export default Card;