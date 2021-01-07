import { Main, Container, Description, Languages } from './styles';
import Badge from '../Badge';

const Card = (props) => {
    return (
        <Main size={props.size}>
                <img src={props.img} />
                <Container>
                    <h1>{props.name}</h1>
                    <a href={props.url}>{props.url}</a>
                    <Description>{props.description}</Description>
                    <h1>Linguagens</h1>
                    <Languages>
                    {props.languages.map((language) => {
                        return <Badge>{language}</Badge>
                    })}
                    </Languages>
                </Container>            
        </Main>
    )
}

export default Card;