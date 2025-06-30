import React from "react";
import { Link } from "react-router-dom";


export default function Youtube() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Youtube
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
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/dc-sfTa3jqs"
                            title="FIRST TIME WATCHING *GAME OF THRONES* Season 1 Episode 6 ' A Golden Crown' REACTION"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/VHHtM_73AFo"
                            title="AI-Powered Adaptive Content in FlutterFlow | The Great Big Quiz of Everything | Tutorial Part 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        src="https://www.youtube.com/embed/Pjp-rCxfmXU"
                        title="mexico travel vlog: tulum + cancun | ruins, cenotes & an indian wedding"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe"
                        src="https://www.youtube.com/embed/lBm8hpcLs3A"
                        title="Israel's Aerial Dominance is Being Challenged"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/qwzHqNJ_KGI"
                            title="How Russia and the USA Would Actually Fight Each Other"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/fxEJnvBZ4yE"
                            title="Israel's Iron Dome is More Advanced Than You Think"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                </div>

                <div className="category_wraper">
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/bdy3_3NaBwE"
                            title="HUHHH?! 😳 | When The Phone Rings (지금 거신 전화는) Episode 1 Reaction"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://www.youtube.com/embed/zmGHLsnn8jc"
                            title="This just HURTS... DAN DA DAN Episode 7 (REACTION)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        src="https://www.youtube.com/embed/9b0G8eBmiYU"
                        title="How To Setup Assessments, Quizzes, and Tests in TalentLMS (TalentLMS Tutorial)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>




            </div >
        </>
    );
};

