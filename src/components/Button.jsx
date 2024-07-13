import PropTypes from "prop-types";

const Button = ({children, type, to, className}) => {
    const buttonClass = type === "primary" ? "btn-primary" : "btn-outline";

    return (
        <a href={to} className={`btn ${buttonClass} ${className}`}>
            {children}
        </a>
    )
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'outline']),
}

export default Button;