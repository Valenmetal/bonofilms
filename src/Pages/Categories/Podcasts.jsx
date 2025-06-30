import React from "react";
import { Link } from "react-router-dom";

export default function Podcasts() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Podcasts
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
                        src="https://fast.wistia.com/embed/iframe/zn7bk887kq">
                    </iframe>
                    <iframe
                        className="category_iframe category_horizontal"
                        src="https://youtube.com/embed/bEGJ3Giy7Uc"
                        title="The Messy Middle–What to do in a Career Crisis w/ Laura Robichaux"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe category_horizontal"
                        src="https://youtube.com/embed/dacJNo4-mEE"
                        title="Learn This SECRET from a Career Transition Expert w/ Mark Langford"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/2j3g2ys6dv">
                    </iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/gdkp4wlrb3">
                    </iframe>
                    <iframe
                        className="category_iframe category_horizontal"
                        src="https://youtube.com/embed/G2hwe4LnwHc"
                        title="Between Two Beers: How a Conversation with Mates Turned into NZ's Top Podcast"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe category_horizontal"
                        src="https://youtube.com/embed/G2hwe4LnwHc"
                        title="Between Two Beers: How a Conversation with Mates Turned into NZ's Top Podcast"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/zn7bk887kq">
                    </iframe>
                </div>
            </div>
        </>
    );
};

