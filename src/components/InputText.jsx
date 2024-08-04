import PropTypes from "prop-types";

export default function InputText({label, type, id, placeholder,className, onChange}) {
    return(
        <label>
            {label}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`p-5 mt-2 placeholder:text-[#999999] w-full rounded-[8px] bg-[#141414] border-2 border-[#262626] ${className}`}
                onChange={onChange}
            />
        </label>
    )
}

InputText.prototype = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
}