import React from "react";
import AnimatedLink from '../../components/AnimatedLink';

export default function YoutubeVlogs() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Youtube Vlogs
                </h2>
                <button className="back-button">
                    <AnimatedLink to={`/`}>
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
                    </AnimatedLink>
                </button>
                <div className="category_wraper">
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/UnUuJhqxsv8"
                            title="How Russia and the USA Would Actually Fight Each Other"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/Pjp-rCxfmXU"
                            title="Israel's Iron Dome is More Advanced Than You Think"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        allowtransparency="true"
                        title="Wistia video player"
                        allowFullscreen
                        frameborder="0"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/ey5qvc4neo">
                    </iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe"
                        allowtransparency="true"
                        title="Wistia video player"
                        allowFullscreen
                        frameborder="0"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/bp9xtiygql">
                    </iframe>
                </div>
            </div >
        </>
    );
};

