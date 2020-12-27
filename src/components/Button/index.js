import { Button, ButtonTextInput } from './styles';
import Link from 'next/link';

const ButtonPrimary = (props) => {

    return (
        <Button size={props.size}>{props.children}</Button>
    )

}

 const ButtonPrimaryTextInput = (props) => {

    return (
        <ButtonTextInput size={props.size} onClick={props.onClick}>{props.children}</ButtonTextInput>
    )

}

 export {ButtonPrimary, ButtonPrimaryTextInput};