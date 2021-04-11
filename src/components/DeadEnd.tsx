import React, {ReactElement} from "react";
import './DeadEnd.scss'

interface Props {
    text: string;
    imgUrl: string;
}

export const DeadEnd = (props: Props): ReactElement => <div className='dead-end'>
    <img src={props.imgUrl} className='dead-end__icon' alt='dead-end-icon'/>
    <h1>{props.text}</h1>
    <a href='/'>TO MAIN MENU</a>
</div>