import dv1 from '/Danza_vertical_1.mp4';
import dv2 from '/Danza_vertical_2.mp4';
import dv3 from '/Danza_vertical_3.mp4';
import React from "react";
import { Link } from "react-router-dom";

export default function Dance() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Dance
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
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/s3soq8bd96">
                    </iframe>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={dv1}></video>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={dv2}></video>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={dv3}></video>
                </div>
            </div>
        </>
    );
};

