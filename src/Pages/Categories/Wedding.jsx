import AveryJason from '/AveryJason.mp4';
import CaitlynThomas from '/CaitlynThomas.mp4';
import ChristinaMatth from '/ChristinaMatth.mp4';
import geishachris from '/geishachris.mp4';
import Jacki from '/Jacki.mp4';
import Jennifer from '/Jennifer.mp4';
import JessicaNick from '/JessicaNick.mp4';
import KatiChris from '/KatiChris.mp4';
import LindsayNick from '/LindsayNick.mp4';
import React from "react";
import { Link } from "react-router-dom";

export default function Wedding() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Wedding
                </h2>
                <button className="back-button">
                    <Link to={`/`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                            />
                        </svg>
                    </Link>
                </button>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={AveryJason}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={CaitlynThomas}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={ChristinaMatth}>
                    </video>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={geishachris}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={Jacki}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={Jennifer}>
                    </video>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={JessicaNick}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={KatiChris}>
                    </video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={LindsayNick}>
                    </video>
                </div>

            </div>
        </>
    );
};

