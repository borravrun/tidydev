import IconButton from "./IconButton.jsx";

function PageHeader({ title, backAction, icon }) {
    return (
        <div className="flex items-center gap-4">
            {backAction && (
                <IconButton onClick={backAction} title="Back">
                    {icon}
                </IconButton>
            )}
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
        </div>
    );
}

export default PageHeader;