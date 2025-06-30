
import Xledger from '/Xledger.mp4';
import ZOOM_TRB from "/ZOOM_TRB.mp4"
import React from "react";
import { Link } from "react-router-dom";

export default function Corporate() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Corporate
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
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/855qaezfj1">
                    </iframe>
                    <video
                        className="category_iframe category_horizontal"
                        controls
                        muted
                        loop
                        src={ZOOM_TRB}></video>
                </div>
                <div className="category_wraper">
                    <video
                        className="category_iframe"
                        src={Xledger}
                        id="animation_video"
                        controls
                        muted
                    />
                </div>
            </div>
        </>
    );
};

