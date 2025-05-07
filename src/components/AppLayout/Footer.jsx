import { PiGearSix } from "react-icons/pi";
import { useNavigate } from "react-router";
import IconButton from "../IconButton.jsx";

function Footer() {
    const navigate = useNavigate();
    return (
        <div className={"w-full fixed bottom-0 z-10 bg-[#363638]"}>
            <hr className="h-[0.4px] border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <div className="p-1 flex justify-start">
               <IconButton onClick={() => navigate("/settings")} title={"Settings"} >
                   <PiGearSix className="text-2xl" />
               </IconButton>
            </div>
        </div>
    );
}

export default Footer;