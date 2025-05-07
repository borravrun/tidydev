function IconButton({onClick, title, children}) {
    return (
        <button
            className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-[#444446] transition-colors focus:outline-none"
            aria-label={title}
            onClick={onClick}
        >
            {children}
            <span className="text-base font-medium">{title}</span>
        </button>
    );
}

export default IconButton;