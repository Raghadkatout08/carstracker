"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { AuthContext } from "../context/auth";

export default function Header() {
    const { light, toggleThemeHandler } = useContext(ThemeContext);
    const { tokens, logout } = useContext(AuthContext);

    const username = tokens ? tokens.username : 'Guest';

    const lightThemePath = "M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12a11 11 0 1022 0 11 11 0 10-22 0z";
    const darkThemePath = "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z";

    return (
        <nav className="bg-gray-700 dark:bg-black p-4 flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={light ? lightThemePath : darkThemePath} />
                </svg>
                <h1 className="text-2xl font-bold text-gray-50">Cars Tracker</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-50 hover:text-gray-300">Home</a>
            </div>

            {/* Theme Toggle and Auth Section */}
            <div className="flex items-center space-x-4">
                <button onClick={toggleThemeHandler} className="text-gray-50">
                    {light ? "Switch to Dark Mode" : "Switch to Light Mode"}
                </button>
                {tokens ? (
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Toggle Theme">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <span className="text-gray-50">Welcome, {username}!</span>
                        <button onClick={logout} className="text-gray-50 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                            Logout
                        </button>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
