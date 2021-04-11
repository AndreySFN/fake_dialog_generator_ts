import React, {ReactElement} from 'react';
import '../components/DeadEnd.scss'
import {DeadEnd} from "../components/DeadEnd";

export const UnderConstruction = (): ReactElement => <DeadEnd
    imgUrl={`${process.env.PUBLIC_URL}/svg/development.svg`}
    text={`Page ${document.location.href} is under construction at this moment`}
/>