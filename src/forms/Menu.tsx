import React, {ReactElement} from 'react';
import './Menu.scss';
import {MessengerButton} from "../components/MessengerButton";
import {INSTAGRAM_URL, TELEGRAM_URL, VK_URL} from "../consts/endpoints";

export const Menu = (): ReactElement =>
    <div className='menu'>
        <h1>Welcome to fake dialog generator</h1>
        <h2>choose your messenger</h2>
        <div className='menu__buttons'>
            <MessengerButton href={TELEGRAM_URL} alt='telegram'
                             iconUrl={`${process.env.PUBLIC_URL}/svg/messengerLogos/telegram.svg`}/>
            <MessengerButton href={VK_URL} alt='vk' iconUrl={`${process.env.PUBLIC_URL}/svg/messengerLogos/vk.svg`}/>
            <MessengerButton href={INSTAGRAM_URL} alt='instagram'
                             iconUrl={`${process.env.PUBLIC_URL}/svg/messengerLogos/instagram.svg`}/>
        </div>
    </div>
