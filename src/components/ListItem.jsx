function ListItem({ icon, background, title, hover, activeClass, isActive, onClick }) {
    return (
        <div
            className={`flex items-center w-full p-4 hover:border-l-2 ${hover} ${isActive ? `border-l-2 ${activeClass}` : ""} cursor-pointer`}
            onClick={onClick}
        >
            <div className="mr-3">
                <div className={`${background} rounded p-1 text-white`}>
                    {icon}
                </div>
            </div>
            <div className="grow font-medium text-white">
                {title}
            </div>
        </div>
    );
}


export default ListItem;