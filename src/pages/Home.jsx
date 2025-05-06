import ListItem from "../components/ListItem.jsx";
import {LIST_ITEMS} from "../modules/Utilis.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function Home() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigation = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowDown") {
                setSelectedIndex((prev) => (prev + 1) % LIST_ITEMS.length);
            } else if (e.key === "ArrowUp") {
                setSelectedIndex((prev) =>
                    prev === 0 ? LIST_ITEMS.length - 1 : prev - 1
                );
            }else if (e.key === "Enter") {
                const selectedItem = LIST_ITEMS[selectedIndex];
                navigation(`/${selectedItem.to}`);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className={'w-full h-full flex flex-col gap-2'}>
            {LIST_ITEMS.map(({icon, title, background, hover, activeClass}, index) => (
                <ListItem
                    key={index}
                    icon={icon}
                    title={title}
                    background={background}
                    hover={hover}
                    isActive={index === selectedIndex}
                    activeClass={activeClass}
                    onClick={() => navigation(`/${LIST_ITEMS[index].to}`)}
                />
            ))}
        </div>
    );
}

export default Home;