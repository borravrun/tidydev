import {PiClipboardLight, PiLinkSimpleBreakThin, PiFolder, PiBookmarkSimpleLight  } from "react-icons/pi";

export const LIST_ITEMS = [
    {
        icon: <PiLinkSimpleBreakThin size={24} />,
        title: "Quick link",
        background: "bg-blue-500",
        hover: "hover:border-blue-500",
        activeClass: "border-blue-500",
        to: "quick-link"
    },
    {
        icon: <PiClipboardLight size={24} />,
        title: "Clipboard",
        background: "bg-green-500",
        hover: "hover:border-green-500",
        activeClass: "border-green-500",
        to: "clipboard"
    },
    {
        icon: <PiFolder size={24} />,
        title: "Projects",
        background: "bg-yellow-500",
        hover: "hover:border-yellow-500",
        activeClass: "border-yellow-500",
        to: "projects"
    },
    {
        icon: <PiBookmarkSimpleLight size={24} />,
        title: "Prompts",
        background: "bg-red-500",
        hover: "hover:border-red-500",
        activeClass: "border-red-500",
        to: "prompts"
    },
];
