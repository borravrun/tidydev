import React, { useState, useRef, useEffect } from "react";
import { PiKeyboardLight, PiArrowCircleLeft   } from "react-icons/pi";
import Keys from "../components/Keys.jsx";
import setupGlobalHotkey from "../modules/GobalHotkeys.js";
import { useNavigate } from "react-router";

const MODIFIER_KEYS = ["⊞", "Ctrl", "Shift", "Alt"];

function Settings() {
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [activationKeys, setActivationKeys] = useState([]);
    const [tempKeys, setTempKeys] = useState([]);
    const [error, setError] = useState("");
    const [globalHotkeyError, setGlobalHotkeyError] = useState("");
    const pressedKeys = useRef([]);

    useEffect(() => {
        // On mount, load activation key from localStorage if present
        const stored = localStorage.getItem("userHotkey");
        if (stored) {
            setActivationKeys(
                stored.split("+").map(label =>
                    label === "Space"
                        ? { label, bg: "#0094ff" }
                        : { label }
                )
            );
        }
    }, []);

    useEffect(() => {
        if (!editing) return;
        const handleKeyDown = (e) => {
            e.preventDefault();
            let label = e.key;
            if (label === " ") label = "Space";
            if (label === "Meta") label = "⊞";
            if (label === "Control") label = "Ctrl";
            if (label === "Shift") label = "Shift";
            if (label === "Alt") label = "Alt";
            if (label.length === 1) label = label.toUpperCase();
            // Only allow up to 3 keys
            if (pressedKeys.current.length >= 3) return;
            if (!pressedKeys.current.some(k => k.label === label)) {
                pressedKeys.current.push({ label });
                setTempKeys([...pressedKeys.current]);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [editing]);

    useEffect(() => {
        if (!editing) return;
        if (tempKeys.length === 0) {
            setError("");
            return;
        }
        if (!MODIFIER_KEYS.includes(tempKeys[0].label)) {
            setError("Shortcut must start with Windows, Ctrl, Shift, or Alt key.");
        } else if (tempKeys.length > 3) {
            setError("No more than 3 keys allowed.");
        } else {
            setError("");
        }
    }, [tempKeys, editing]);

    const handleEdit = () => {
        setEditing(true);
        setTempKeys([]);
        pressedKeys.current = [];
    };

    const handleSave = async () => {
        setActivationKeys(tempKeys);
        setEditing(false);
        pressedKeys.current = [];
        setTempKeys([]);
        const hotkeyString = tempKeys.map(k => k.label).join("+");
        localStorage.setItem("userHotkey", hotkeyString);
        try {
            await setupGlobalHotkey();
            setGlobalHotkeyError("");
        } catch (err) {
            localStorage.removeItem("userHotkey");
            setGlobalHotkeyError(
                typeof err === "string" ? err : err?.message || "Failed to register global hotkey."
            );
        }
    };

    const handleCancel = () => {
        setEditing(false);
        pressedKeys.current = [];
        setTempKeys([]);
    };

    return (
        <div className="w-full h-screen bg-[#363638] p-0">
            {/* Heading and Back Button */}
            <div className="flex items-center px-8 pt-8 pb-4">
                <button
                    className="flex items-center gap-2 mr-4 px-2 py-1 rounded text-white hover:bg-[#444446] transition-colors text-base font-medium"
                    onClick={() => navigate("/")}
                    aria-label="Back to Home"
                >
                     <PiArrowCircleLeft size={24} /> Back
                </button>
                <div className="text-white text-2xl font-semibold">Settings</div>
            </div>
            {/* Activation Section */}
            <div className="px-8">
                <div className="text-white text-lg font-medium mb-2">Activation</div>
                <div className="bg-[#232325] rounded-lg p-6 flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#18181a] p-3 rounded-lg flex items-center justify-center">
                            <PiKeyboardLight className="text-2xl text-white" />
                        </div>
                        <div>
                            <div className="text-white font-medium">Activation key</div>
                            <div className="text-gray-400 text-sm">This key will open the Command Palette.</div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-2">
                        <Keys keys={editing ? tempKeys : activationKeys} />
                        <button
                            className={`ml-4 p-1 rounded hover:bg-[#444446] transition-colors ${editing ? "bg-[#444446]" : ""}`}
                            aria-label="Edit activation key"
                            onClick={handleEdit}
                            disabled={editing}
                        >
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-gray-300"><path d="M16.862 5.487a2.25 2.25 0 1 1 3.182 3.182l-1.06 1.06-3.182-3.182 1.06-1.06ZM14.34 8.01l3.182 3.182-8.13 8.13a2 2 0 0 1-.707.464l-3.09 1.03a.5.5 0 0 1-.632-.632l1.03-3.09a2 2 0 0 1 .464-.707l8.13-8.13Z" fill="currentColor"/></svg>
                        </button>
                        {editing && (
                            <>
                                <span className="ml-2 text-xs text-gray-400">Press up to 3 keys, then save…</span>
                                <button
                                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium disabled:opacity-50"
                                    onClick={handleSave}
                                    disabled={!!error || tempKeys.length === 0}
                                >Save</button>
                                <button
                                    className="ml-2 px-3 py-1 rounded bg-gray-600 text-white text-sm font-medium"
                                    onClick={handleCancel}
                                >Cancel</button>
                            </>
                        )}
                    </div>
                </div>
                {editing && error && (
                    <div className="text-red-400 text-xs mt-2 ml-auto w-fit">{error}</div>
                )}
                {globalHotkeyError && (
                    <div className="text-red-400 text-xs mt-2 ml-auto w-fit">{globalHotkeyError}</div>
                )}
            </div>
        </div>
    );
}

export default Settings;
