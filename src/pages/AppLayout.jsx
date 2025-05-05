import {Outlet} from "react-router";
import InputBox from "../components/InputBox.jsx";
import Footer from "../components/Footer.jsx";

function AppLayout() {
    return (
        <div className={'w-full h-screen bg-[#363638] overflow-y-auto [&::-webkit-scrollbar]:w-2'}>
            <InputBox/>
            <div className={'w-full h-full mt-12 p-4'}>
                <Outlet/>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <Footer/>
        </div>
    );
}

export default AppLayout;