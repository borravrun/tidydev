import { PiPencilSimple } from "react-icons/pi";
import Keys from "../Keys.jsx";

function KeyboardShortcutEditor({
                                    isEditing,
                                    activationKeys,
                                    tempKeys,
                                    error,
                                    globalHotkeyError,
                                    onEdit,
                                    onCancel,
                                    onSave
                                }) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <Keys keys={isEditing ? tempKeys : activationKeys} />
                {!isEditing ? (
                    <button
                        onClick={onEdit}
                        aria-label="Edit activation key"
                        className="ml-4 p-1 rounded hover:bg-[#444446] transition-colors"
                    >
                        <PiPencilSimple className="text-white" size={24} />
                    </button>
                ) : (
                    <div className="flex">
                        <button
                            className="ml-2 px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium disabled:opacity-50"
                            onClick={onSave}
                            disabled={!!error || tempKeys.length === 0}
                        >
                            Save
                        </button>
                        <button
                            className="ml-2 px-3 py-1 rounded bg-gray-600 text-white text-sm font-medium"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>

            {/* Helper text and error messages */}
            <div className="flex flex-col items-end mt-2">
                {isEditing && <span className="text-xs text-gray-400">Press up to 3 keys, then save…</span>}
                {isEditing && error && <p className="text-red-400 text-xs">{error}</p>}
                {globalHotkeyError && <p className="text-red-400 text-xs">{globalHotkeyError}</p>}
            </div>
        </div>
    );
}

export default KeyboardShortcutEditor;