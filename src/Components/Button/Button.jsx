import { Button, } from 'reactstrap';
import "../Button/stile.css";

export function Btn({ removeUser, index, children, type = "button" }) {
    return (
        <Button  className='btn'  type={type} onClick={() => (removeUser ? removeUser(index) : null)}>
            {children}
        </Button>
    )
}

