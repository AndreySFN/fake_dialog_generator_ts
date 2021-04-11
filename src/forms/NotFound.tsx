import React, {ReactElement} from "react";
import {DeadEnd} from "../components/DeadEnd";

export const NotFound = (): ReactElement => <DeadEnd
    imgUrl={`${process.env.PUBLIC_URL}/svg/error.svg`}
    text={'Sorry, but this page does not exist :('}
/>