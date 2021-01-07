import { Input, InputButton, Container } from './styles';
import { ButtonPrimaryTextInput } from '../Button'
import Link from 'next/link';

const TextInput = (props) => {

    return(
        <Input placeholder={props.placeholder} />
    );

 }

 const TextInputButton = (props) => {
    return(
        <Container>
            <InputButton placeholder={props.placeholder} onChange={props.onChange} button={props.button} link={props.link}/>
            <Link href={props.link}>
                <ButtonPrimaryTextInput>{props.button}</ButtonPrimaryTextInput>
            </Link>
        </Container>
    );
 }

 export {TextInput, TextInputButton};