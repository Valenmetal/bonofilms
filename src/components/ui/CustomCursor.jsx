import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import './PremiumUI.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Hide default cursor
        // Hide default cursor
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';

        // Initial set
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        // Mouse move handler
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3, // Slower follow
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover effects
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 0.5,
                backgroundColor: "rgba(255, 255, 255, 0)", // Transparent
                border: "2px solid white",
                duration: 0.2
            });
            gsap.to(follower, {
                scale: 2.5,
                backgroundColor: "rgba(144, 116, 158, 0.2)", // Brand color
                borderColor: "transparent",
                duration: 0.2
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "white",
                border: "none",
                duration: 0.2
            });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.5)",
                duration: 0.2
            });
        };

        // Add listeners to interactive elements
        const addListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, .hamburger, .manual-btn, .wraper > div, .team_member');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
                // Force cursor styling via JS just in case CSS misses some
                el.style.cursor = 'none';
            });
        };

        // Re-apply listeners on route change or DOM updates
        addListeners();

        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.style.cursor = 'auto'; // Restore default
            observer.disconnect();

            // Clean up listeners is tricky with MutationObserver constantly adding them
            // but for a SPA this simple cleanup is often sufficient or we could track added listeners
        };
    }, [location]); // Re-run on location change to catch new elements

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '10px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                // mixBlendMode: 'difference'
            }} />
            <div ref={followerRef} className="custom-cursor-follower" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '30px',
                height: '30px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                transition: 'transform 0.1s ease, background-color 0.2s ease, border-color 0.2s ease',
            }} />
        </>
    );
};

export default CustomCursor;
