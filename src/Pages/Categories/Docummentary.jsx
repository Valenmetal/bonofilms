import tacoma from '/Interview_Tacoma_Farmers.mp4';
import tacoma2 from '/Tacoma_Farmers.mp4';
import AndreCassiano from '/AndreCassiano.mp4';
import React from "react";
import { Link } from "react-router-dom";

export default function Docummentary() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Docummentary
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
                <div className="category_wraper">
                    <video
                        className="category_iframe"
                        controls
                        muted
                        loop
                        src={tacoma}></video>
                    <div className="two_blocks">
                        <video className="category_iframe category_horizontal"
                            src={tacoma2}
                            controls
                            muted></video>
                        <video className="category_iframe category_horizontal"
                            src={AndreCassiano}
                            controls
                            muted
                        ></video>
                    </div>
                </div>
                <div className="category_wraper">
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe category_horizontal"
                            allowtransparency="true"
                            title="Wistia video player"
                            name="wistia_embed"
                            src="https://fast.wistia.com/embed/iframe/ey5qvc4neo">
                        </iframe>
                        <iframe
                            className="category_iframe category_horizontal"
                            allowtransparency="true"
                            title="Wistia video player"
                            name="wistia_embed"
                            src="https://fast.wistia.com/embed/iframe/ey5qvc4neo">
                        </iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/ey5qvc4neo">
                    </iframe>
                </div>
            </div>
        </>
    );
};

