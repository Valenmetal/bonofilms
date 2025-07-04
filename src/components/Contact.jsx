import React from 'react';
import { LogoWhatsApp, LogoEmail } from '../assets/Icons';

const ContactButton = () => {
    return (
        <button className="btn-cssbuttons">
            <span>Contact</span><span>
            </span>
            <ul>
                <li>
                    <a href="https://wa.me/5491126512436" aria-label="Contact"><LogoWhatsApp /></a>
                </li>
                <li>
                    <a href="mailto:Bonofilms@gmail.com" aria-label="Email"><LogoEmail /></a>
                </li>
            </ul>
        </button >
    );
}



export default ContactButton;
