import React from 'react';
import './NameCard.css';

const NameCard = (Props) => {
    const age = Math.floor(Math.random()*30);
    const arr = [1, 2, 3];
    const obj = {address: 'Hanoi'};
    const date = new Date().getDate();
    const dateStyle = {
        backgroundColor: 'yellow',
        fontSize: 18,
        width: '80%',
    }

    return (
        <div className="name-card">
            <div className="name">Name: {Props.name}</div>
            <div className="age"><p><span>Age: {Props.age}</span></p></div>
            {Props.children}
            <div style={dateStyle}>To day is {date}</div>
        </div>
    )
}

export default NameCard;