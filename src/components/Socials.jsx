import React from 'react';
import { LogoInsta, LogoYoutube } from '../assets/Icons';

const SocialsButton = () => {
    return (
        <button className="btn-cssbuttons">
            <span>Socials</span><span>
            </span>
            <ul>
                <li>
                    <a href="https://www.instagram.com/bonofilms/" target="_blank" aria-label="Instagram"><LogoInsta /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@alaanlutricuso/videos" target="_blank" aria-label="YouTube"><LogoYoutube /></a>
                </li>
            </ul>
        </button>
    );
}



export default SocialsButton;
