import { Button, ButtonTextInput } from './styles';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ButtonPrimary = (props) => {

    return (
        <Link href={props.link}>
            <Button size={props.size} onClick={props.onClick}>{props.children}</Button>
        </Link>
    )

}

 const ButtonPrimaryTextInput = (props) => {

    return (
        <ButtonTextInput size={props.size} onClick={props.onClick}>
            <i><FaArrowRight/></i><p>{props.children}</p>
        </ButtonTextInput>
    )

}

 export {ButtonPrimary, ButtonPrimaryTextInput};