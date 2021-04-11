import React, {ReactElement} from "react";
import './MessengerButton.scss'

interface Props {
    href: string;
    iconUrl: string;
    alt: string;
}

export const MessengerButton = (props: Props): ReactElement => <a href={props.href}>
    <img className='messenger-button' src={props.iconUrl} alt={props.alt}/>
</a>