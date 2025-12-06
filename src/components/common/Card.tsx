import React from 'react';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    glass?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverEffect = false, glass = true }) => {
    return (
        <div
            className={clsx(
                "rounded-xl p-6 border",
                glass ? "glass-panel bg-bg-card/50" : "bg-bg-secondary border-border-color",
                hoverEffect && "hover:border-accent-primary/30 hover:shadow-glow transition-all duration-300",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
