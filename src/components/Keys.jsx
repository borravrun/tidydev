import React from "react";

function Keys({ keys }) {
    return (
        <div className="flex gap-2">
            {keys.map(({ label, bg = "#3a3a3c", text = "#fff" }, idx) => (
                <div
                    key={idx}
                    className="px-3 py-1 rounded text-lg font-semibold"
                    style={{ background: bg, color: text }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

export default Keys;
