"use client"
import { useTheme } from "next-themes";
import React from "react";
const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [DOMLoaded, setDOMLoaded] = React.useState(false)
    React.useEffect(()=>{
        setDOMLoaded(true);
    })
    return(DOMLoaded && (
        <button
            aria-label="Toggle Dark Mode "
            type="button"
            className="flex items-center justify-center rounded-lg p-2 trasition-colors"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            {resolvedTheme === "dark" ? 
            <img src="/images/theme_toggle/sun.png" className="w-[20px] h-[20px]"/>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>}
        </button>
    ))
}

export default ThemeButton;