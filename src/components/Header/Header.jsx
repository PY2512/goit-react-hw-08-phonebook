import {AuthNav} from "./../AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLogIn } from "redux/auth/auth-selectors";

import style from './Header.module.css';


export function Header() {
    const isLogIn = useSelector(getIsLogIn);

    return (
        <header className={style.header}>
            <Navigation />
            {isLogIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}