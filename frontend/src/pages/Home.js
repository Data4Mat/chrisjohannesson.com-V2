import React, { useRef, useLayoutEffect } from 'react';
import './styles/home.css';
import { gsap } from 'gsap';
import WobblyText from '../components/WobblyText';


const Home = () => {
    const pageRef = useRef();
    let yStart = window.innerHeight + 200;
    const tl = gsap.timeline();
    const text = "Here you will find information about me and my work. Links to code and more.";
    let duration = 2;

    useLayoutEffect(() => {
        tl.from(pageRef.current, {
            scale: 0,
            opacity: 0,
            rotation: "+=360",
            y: yStart,
            duration: 2
        })
    });

    return (
        <main>
            <h1 className="page-head-title" ref={pageRef}>Chris Johannesson</h1>
            <div className="info-text-wrapper">
                <WobblyText text={text} delay={duration} />
            </div>
        </main>
    );
}

export default Home;