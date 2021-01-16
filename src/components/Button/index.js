import { Button, ButtonTextInput } from './styles';
import { FaArrowRight } from 'react-icons/fa';

const ButtonPrimary = (props) => {

    return (
        <Button size={props.size} onClick={props.onClick}>{props.children}</Button>
    )

}

 const ButtonPrimaryTextInput = (props) => {

    return (
        <ButtonTextInput size={props.size} onClick={props.onClick}><i><FaArrowRight/></i><p>{props.children}</p></ButtonTextInput>
    )

}

 export {ButtonPrimary, ButtonPrimaryTextInput};