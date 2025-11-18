// components/common/Card.tsx

import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
        >
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default Card;