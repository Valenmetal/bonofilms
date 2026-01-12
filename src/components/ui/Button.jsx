import React from 'react'
import AnimatedLink from '../AnimatedLink'
import './Button.css'

const Button = ({
    variant = 'primary', // primary, secondary, ghost
    size = 'md', // sm, md, lg
    children,
    onClick,
    to, // para AnimatedLink
    className = '',
    ...props
}) => {
    const classes = `btn btn--${variant} btn--${size} ${className}`

    if (to) {
        return (
            <AnimatedLink to={to} className={classes} {...props}>
                {children}
            </AnimatedLink>
        )
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button
