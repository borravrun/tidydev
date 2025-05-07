function SettingsCard({ icon, title, description, children }) {
    return (
        <div className="rounded-lg p-2 flex items-center gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-[#18181a] p-3 rounded-lg flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <div className="text-white font-medium">{title}</div>
                    <div className="text-gray-400 text-sm">{description}</div>
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-2">
                {children}
            </div>
        </div>
    );
}

export default SettingsCard;