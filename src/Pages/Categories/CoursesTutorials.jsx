import React from "react";
import { Link } from "react-router-dom";

export default function CoursesTutorials() {
    return (
        <>
            <div className="category_section">
                <h2 className="carrousel-title_videodetail">
                    Courses and Tutorials
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
                            src="https://youtube.com/embed/JvqZUBKlXwA"
                            title="How to customize TalentLMS settings, manage branches, groups, and learners (TalentLMS tutorial)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/qjd5PIX5a1A"
                            title="How to Use AI to Build Online Courses 10x Faster in 2025"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        src="https://youtube.com/embed/Kb6ZaT1pSm0"
                        title="Supercharge Your App with AI Agents and Algolia Search | Legacy App Part 4 (Full Tutorial)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe"
                        src="https://youtube.com/embed/1n5WyrIr-Hk"
                        title="Want to Drop 30 Pounds and Keep It Off?"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/rUEEbbbSNtY"
                            title="Record & Transcribe Audio in FlutterFlow | Legacy App Part 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/x7iUmWYiaQQ"
                            title="Supabase Setup (Database & Auth) in FlutterFlow | The Great Big Quiz of Everything | Tutorial Part 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div className="category_wraper">
                    <div className="two_blocks">
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/pyPMZPAPFpk"
                            title="LMS vs E-Learning Platform - What You NEED to Know!"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                        <iframe
                            className="category_iframe"
                            src="https://youtube.com/embed/9b0G8eBmiYU"
                            title="How To Setup Assessments, Quizzes, and Tests in TalentLMS (TalentLMS Tutorial)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <iframe
                        className="category_iframe"
                        src="https://youtube.com/embed/VHHtM_73AFo"
                        title="AI-Powered Adaptive Content in FlutterFlow | The Great Big Quiz of Everything | Tutorial Part 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className="category_wraper">
                    <iframe
                        className="category_iframe"
                        src="https://youtube.com/embed/TuFuV05yy48"
                        title="Dynamic Animations in FlutterFlow | Interactive Tutorial | Legacy App Part 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
            </div>

        </>
    );
};

