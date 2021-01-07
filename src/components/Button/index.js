import { Button, ButtonTextInput } from './styles';

const ButtonPrimary = (props) => {

    return (
        <Button size={props.size} onClick={props.onClick}>{props.children}</Button>
    )

}

 const ButtonPrimaryTextInput = (props) => {

    return (
        <ButtonTextInput size={props.size} onClick={props.onClick}>{props.children}</ButtonTextInput>
    )

}

 export {ButtonPrimary, ButtonPrimaryTextInput};