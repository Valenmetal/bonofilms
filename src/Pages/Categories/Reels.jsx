import PanchoVertical from '/PanchoVertical.mp4';
import MADA_3 from '/MADA_3.mp4';
import React from "react";
import { Link } from "react-router-dom";

export default function Reels() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Reels
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
                        src="https://fast.wistia.com/embed/iframe/tfkjs6xw1z">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/2j3g2ys6dv">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/6wil275bx0">
                    </iframe>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/vecyumegrt">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/b396uf8tub">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/1roxrkgtnc">
                    </iframe>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/nfmugk41s9">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/rsmbk195pd">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/uorwykysch">
                    </iframe>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/z04ywl91id">
                    </iframe>
                    <iframe
                        className="category_vertical"
                        allowtransparency="true"
                        title="Wistia video player"
                        name="wistia_embed"
                        src="https://fast.wistia.com/embed/iframe/7has112ogn">
                    </iframe>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={PanchoVertical}>
                    </video>
                </div>
                <div className="category_wraper" style={{ justifyContent: 'space-evenly' }}>
                    <video
                        className="category_vertical"
                        controls
                        muted
                        loop
                        src={MADA_3}>
                    </video>
                </div>
            </div>
        </>
    );
};

