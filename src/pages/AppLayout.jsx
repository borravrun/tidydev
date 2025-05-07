import {Outlet} from "react-router";
import SearchBar from "../components/AppLayout/SearchBar.jsx";
import Footer from "../components/AppLayout/Footer.jsx";

function AppLayout() {
    return (
        <div className={'w-full h-screen bg-[#363638] overflow-hidden [&::-webkit-scrollbar]:w-2'}>
            <SearchBar/>
            <div className={'w-full h-full mt-6 py-4'}>
                <Outlet/>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <Footer/>
        </div>
    );
}

export default AppLayout;