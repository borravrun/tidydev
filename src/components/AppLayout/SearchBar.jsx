import {IoSearch } from "react-icons/io5";

function SearchBar() {
    return (
        <div className={'w-full fixed top-0 z-10 bg-[#363638]'}>
            <div className={'flex items-center px-4 py-2 gap-4 text-gray-200'}>
                <IoSearch  size={24} />
                <input className={'focus:outline-none w-full text-md'} placeholder={"Start typing..."}/>
            </div>
            <hr className="h-[0.4px] border-t-0 bg-neutral-100 dark:bg-white/10"/>
        </div>
    );
}

export default SearchBar;