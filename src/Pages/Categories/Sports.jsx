import React from "react";
import AnimatedLink from '../../components/AnimatedLink';

export default function Sports() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Sports and Movement
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
                            src="https://youtube.com/embed/50cNHSIueFM"
                            title="🥊💪 13 Min Ultimate FullBody HIIT Workout with Boxing Moves 💥"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/SUDAhz-JtMg"
                            title="Festival De Parada De Manos - 3ra Edición - 2023"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        src="https://youtube.com/embed/f3W7trZ_nJk"
                        title="15 Min Strong ABS & Core No Equipment, No Repeat"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/gw4k826ybe">
                    </iframe>

                </div>
            </div>
        </>
    );
};

