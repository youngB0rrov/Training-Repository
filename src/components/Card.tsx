import React, { FunctionComponent, useState } from "react";

interface CardProps {
    width: string;
    height: string;
    onClick: (num: number) => void;
}

const Card: FunctionComponent<CardProps> = ({
    width,
    height,
    children,
    onClick
}) => {
    const [number, setNumber] = useState(0);
     return (
        <div 
            style={{width: width, height: height, border: '1px solid #ddd'}}
            onClick={() => {onClick(number)}}
        >
            <p>Card</p>
            {children}
        </div>
    )
}

export default Card;