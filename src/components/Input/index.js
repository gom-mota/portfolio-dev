import { Input, InputButton } from './styles';

const TextInput = (props) => {

    return(
        <Input placeholder={props.placeholder} />
    );

 }

 const TextInputButton = (props) => {
    return(
        <InputButton placeholder={props.placeholder} onChange={props.onChange}/>
    );
 }

 export {TextInput, TextInputButton};