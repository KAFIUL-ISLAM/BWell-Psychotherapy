import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="dark:bg-gray-800 shadow " style={{ backgroundColor: '#91D0CC' }}>
                <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-20">
                            <Link className="flex-shrink-0" to="/">
                                <h3 className='text-white font-bold text-4xl'>BWell Psychotherapy</h3>
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ActiveLink className="text-white  hover:text-pink-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/">
                                        Home
                                    </ActiveLink>
                                    <ActiveLink className="text-white dark:text-white  hover:text-pink-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/blogs">
                                        Blogs
                                    </ActiveLink>
                                    <ActiveLink className="text-white hover:text-pink-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/about">
                                        About
                                    </ActiveLink>
                                    <ActiveLink className="text-white  hover:text-pink-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/register">
                                        Register
                                    </ActiveLink>
                                    <ActiveLink className="text-white  hover:text-pink-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/login">
                                        Login
                                    </ActiveLink>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button onClick={() => setOpen(!open)} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    {
                                        open ?
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="20" height="20"
                                                className="h-8 w-8"
                                                viewBox="0 0 50 50"
                                                fill="currentColor"
                                            ><path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                                            </svg> :
                                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                                </path>
                                            </svg>
                                    }
                                </button>
                            </div>
                    </div>
                </div>
                {
                    open && <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <ActiveLink className="text-gray-400 hover:text-pink-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">
                                Home
                            </ActiveLink>
                            <ActiveLink className="text-gray-400 dark:text-white hover:text-pink-800 block px-3 py-2 rounded-md text-base font-medium" to="/blogs">
                                Blogs
                            </ActiveLink>
                            <ActiveLink className="text-gray-400 hover:text-pink-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/about">
                                About
                            </ActiveLink>
                            <ActiveLink className="text-gray-400 hover:text-pink-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/register">
                                Register
                            </ActiveLink>
                            <ActiveLink className="text-gray-400 hover:text-pink-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/login">
                                Login
                            </ActiveLink>
                        </div>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Header;