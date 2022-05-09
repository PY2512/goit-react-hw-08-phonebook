import { NavLink } from "react-router-dom";

import style from './AuthNav.module.css';

export function AuthNav() {
    <div className={style.box}>
        <NavLink
        exact="true"
        to="/register"
        className={style.link}
        activeClassName={style.link_active}>
            Register
        </NavLink>

        <NavLink
        exact="true"
        to="/login"
        className={style.link}
        activeClassName={style.link_active}
        >
            Login
        </NavLink>

    </div>
}

// export default AuthNav;