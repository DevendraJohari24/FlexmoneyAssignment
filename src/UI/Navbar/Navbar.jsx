import { Fragment } from "react";
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            
        <nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FlexMoney</span>
                </a>
                <div className="w-full flex-row block w-auto" id="navbar-solid-bg">
                <ul className="flex flex-row mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white  dark:bg-transparent" aria-current="page">Admission Form</NavLink>
                    </li>
                    <li>
                    <NavLink to="/users" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>


        </Fragment>
    );
}

export default Navbar;