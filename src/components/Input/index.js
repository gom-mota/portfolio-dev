import { Input, InputButton, Container } from "./styles";
import { ButtonPrimaryTextInput } from "../Button";
import Link from "next/link";

const TextInput = (props) => {
    return (
        <Input
            name={props.name}
            placeholder={props.placeholder}
            size={props.size}
            align={props.align}
            onChange={props.onChange}
        />
    );
};

const TextInputButton = (props) => {
    return (
        <Container>
            <InputButton
                name={props.name}
                placeholder={props.placeholder}
                size={props.size}
                align={props.align}
                onChange={props.onChange}
                button={props.button}
                link={props.link}
            />
            <ButtonPrimaryTextInput link={props.link}>
                {props.button}
            </ButtonPrimaryTextInput>
        </Container>
    );
};

export { TextInput, TextInputButton };
