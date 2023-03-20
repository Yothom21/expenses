import './Card.css';
import {PropsWithChildren} from "react";

type CardProps ={
    className:string;
}

const Card =  (props:PropsWithChildren<CardProps>) => {
    const classes = "card " + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;