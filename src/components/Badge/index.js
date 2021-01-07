import { Item } from './styles';

const Badge = (props) => {
    return (
        <Item size={props.size}>{props.children}</Item>
    )    
}

export default Badge;