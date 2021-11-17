import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import WobblyTextItem from './WobblyTextItem';

// Expects 
const WobblyText = (props) => {
    const pageIntroText = useRef();
    const xdelay = props.delay ? props.delay - 0.5 : 0;
    var items = props.text ? props.text.split(" ") : ["No text"];

    const tl = gsap.timeline();
    useLayoutEffect(() => {
        tl.from(".info-text", {
            delay: xdelay,
            duration: 2,
            rotateX: "+=720",
            rotateY: "-=360",
            scale: 0,

        }).to(".pageInfoWord", {
            /* To be able to use stagger wi need to use the class name instead of the ref to get the exppected behavior. */
            stagger: 0.3,
            duration: 0.5,
            rotateX: "-=360",
            color: "blue"
        });
    });

    return (
        <div className="info-text" ref={pageIntroText}>
            {items.map((item, key) => (
                <WobblyTextItem cn="pageInfoWord" key={key} item={item} />
            ))}
        </div>
    );
}

export default WobblyText;