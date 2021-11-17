import React from 'react';

const WobblyTextItem = (props) => {
    return (
        <span className={props.cn}>{props.item}</span>
    );
}

export default WobblyTextItem;