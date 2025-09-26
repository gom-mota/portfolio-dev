import { Button, ButtonTextInput } from "./styles";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ButtonPrimary = (props) => {
    return (
        <Button size={props.size} onClick={props.onClick}>
            <Link href={props.link}>{props.children}</Link>
        </Button>
    );
};

const ButtonPrimaryTextInput = (props) => {
    return (
        <ButtonTextInput size={props.size} onClick={props.onClick}>
            <Link href={props.link}>
                <i>
                    <FaArrowRight />
                </i>
                {props.children}
            </Link>
        </ButtonTextInput>
    );
};

export { ButtonPrimary, ButtonPrimaryTextInput };
