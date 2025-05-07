import { useState, useRef, useEffect } from "react";
import setupGlobalHotkey from "../modules/GobalHotkeys.js";


const MODIFIER_KEYS = ["Ctrl", "Shift", "Alt"];

// Utility: Normalize key label
export const normalizeKey = (key) => {
    switch (key) {
        case " ": return "Space";
        case "Control": return "Ctrl";
        case "Shift": return "Shift";
        case "Alt": return "Alt";
        default: return key.length === 1 ? key.toUpperCase() : key;
    }
};

export function useHotkeyManager() {
    const [isEditing, setIsEditing] = useState(false);
    const [activationKeys, setActivationKeys] = useState([]);
    const [tempKeys, setTempKeys] = useState([]);
    const [error, setError] = useState("");
    const [globalHotkeyError, setGlobalHotkeyError] = useState("");
    const pressedKeys = useRef([]);

    // Load keys from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("userHotkey");
        if (stored) {
            const parsed = stored.split("+").map(label => ({
                label,
                ...(label === "Space" && { bg: "#0094ff" })
            }));
            setActivationKeys(parsed);
        }
    }, []);

    // Handle keydown when editing
    useEffect(() => {
        if (!isEditing) return;

        const handleKeyDown = (e) => {
            e.preventDefault();
            const label = normalizeKey(e.key);

            if (pressedKeys.current.some(k => k.label === label) || pressedKeys.current.length >= 3) return;

            pressedKeys.current.push({ label });
            setTempKeys([...pressedKeys.current]);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isEditing]);

    // Validation logic for shortcut
    useEffect(() => {
        if (!isEditing) return;
        if (tempKeys.length === 0) return setError("");

        if (!MODIFIER_KEYS.includes(tempKeys[0].label)) {
            setError("Shortcut must start with Ctrl, Shift, or Alt key.");
        } else if (tempKeys.length > 3) {
            setError("No more than 3 keys allowed.");
        } else {
            setError("");
        }
    }, [tempKeys, isEditing]);

    // Handlers
    const handleEdit = () => {
        setIsEditing(true);
        setTempKeys([]);
        pressedKeys.current = [];
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempKeys([]);
        pressedKeys.current = [];
        setError("");
    };

    const handleSave = async () => {
        const hotkeyString = tempKeys.map(k => k.label).join("+");
        setActivationKeys(tempKeys);
        setIsEditing(false);
        pressedKeys.current = [];
        setTempKeys([]);
        localStorage.setItem("userHotkey", hotkeyString);

        try {
            await setupGlobalHotkey();
            setGlobalHotkeyError("");
        } catch (err) {
            localStorage.removeItem("userHotkey");
            setGlobalHotkeyError(err?.message || "Failed to register global hotkey.");
        }
    };

    return {
        isEditing,
        activationKeys,
        tempKeys,
        error,
        globalHotkeyError,
        handleEdit,
        handleCancel,
        handleSave
    };
}