import {IoSearch } from "react-icons/io5";

function InputBox() {
    return (
        <div className={'w-full fixed top-0 z-10 bg-[#363638]'}>
            <div className={'flex items-center p-4 gap-4 text-gray-200'}>
                <IoSearch  className={'text-3xl'} />
                <input className={'focus:outline-none w-full text-xl'} placeholder={"Start typing..."}/>
            </div>
            <hr className="h-[0.4px] border-t-0 bg-neutral-100 dark:bg-white/10"/>
        </div>
    );
}

export default InputBox;