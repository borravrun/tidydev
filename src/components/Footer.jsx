import { PiGearSix } from "react-icons/pi";
import { useNavigate } from "react-router";

function Footer() {
    const navigate = useNavigate();
    return (
        <div className={"w-full fixed bottom-0 z-10 bg-[#363638]"}>
            <hr className="h-[0.4px] border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <div className="p-2 flex justify-start">
                <button
                    className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-[#444446] transition-colors focus:outline-none"
                    aria-label="Settings"
                    onClick={() => navigate("/settings")}
                >
                    <PiGearSix className="text-2xl" />
                    <span className="text-base font-medium">Settings</span>
                </button>
            </div>
        </div>
    );
}

export default Footer;