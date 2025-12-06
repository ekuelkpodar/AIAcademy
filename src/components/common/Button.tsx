import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 shadow-lg shadow-accent-primary/25 border border-transparent",
        secondary: "bg-bg-card hover:bg-bg-card-hover text-text-primary border border-border-color",
        outline: "border border-accent-primary text-accent-primary hover:bg-accent-primary/10",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
