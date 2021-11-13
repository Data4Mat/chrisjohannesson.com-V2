import React, { useRef, useLayoutEffect } from 'react';
import './styles/home.css';
import { gsap } from 'gsap';


const Home = () => {
    const pageRef = useRef();
    const pageIntroText = useRef();
    const pageInfoWord = useRef();
    let yStart = window.innerHeight + 200;
    const tl = gsap.timeline();

    useLayoutEffect(() => {
        tl.from(pageRef.current, {
            scale: 0,
            opacity: 0,
            rotation: "+=360",
            y: yStart,
            duration: 2
        }).from(pageIntroText.current, {
            //delay: 0.5,
            duration: 2,
            rotateX: "+=720",
            rotateY: "-=360",
            scale: 0,

        }).to(".pageInfoWord", {
            stagger: 0.3,
            duration: 0.5,
            rotateX: "-=360",
            color: "blue"
        })
    });

    return (
        <main>
            <h1 className="page-head-title" ref={pageRef}>Chris Johannesson</h1>
            <div className="info-text-wrapper">
                <div className="info-text" ref={pageIntroText}>

                    <span className="pageInfoWord" ref={pageInfoWord}>Here </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>you </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>will </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>find </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>information </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>about </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>me </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>and </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>my </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>work. </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>Links </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>to </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>code </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>and </span>
                    <span className="pageInfoWord" ref={pageInfoWord}>more.</span>

                </div>
            </div>
        </main>
    );
}

export default Home;