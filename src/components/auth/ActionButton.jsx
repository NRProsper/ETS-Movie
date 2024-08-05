

const ActionButton =  ({children, onClick, isDisabled}) => (
    <button
        className={`${isDisabled ? `bg-red-500 cursor-not-allowed` : `bg-[#E50000] cursor-pointer`} font-semibold px-6 py-3 rounded-md`}
        onClick={onClick}
        disabled={isDisabled}
    >
        {children}
    </button>
)


export default ActionButton