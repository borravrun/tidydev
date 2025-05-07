import { PiArrowCircleLeft, PiKeyboardLight } from "react-icons/pi";
import { useNavigate } from "react-router";
import { useHotkeyManager } from "../hooks/useHotkeyManager";
import KeyboardShortcutEditor from "../components/Settings/KeyboardShortcutEditor";
import PageHeader from "../components/PageHeader";
import SettingsCard from "../components/Settings/SettingsCard";

function Settings() {
    const navigate = useNavigate();
    const {
        activationKeys,
        isEditing,
        tempKeys,
        error,
        globalHotkeyError,
        handleEdit,
        handleCancel,
        handleSave
    } = useHotkeyManager();

    return (
        <div className="w-full h-screen bg-[#363638] p-4">
            <PageHeader
                title="Settings"
                backAction={() => navigate("/")}
                icon={<PiArrowCircleLeft size={24} />}
            />

            <div className="pt-4">
                <h2 className="text-white text-md font-medium mb-2">Activation</h2>
                <SettingsCard
                    icon={<PiKeyboardLight className="text-2xl text-white" />}
                    title="Activation key"
                    description="This key will open the Command Palette."
                >
                    <KeyboardShortcutEditor
                        isEditing={isEditing}
                        activationKeys={activationKeys}
                        tempKeys={tempKeys}
                        error={error}
                        globalHotkeyError={globalHotkeyError}
                        onEdit={handleEdit}
                        onCancel={handleCancel}
                        onSave={handleSave}
                    />
                </SettingsCard>
            </div>
        </div>
    );
}

export default Settings;