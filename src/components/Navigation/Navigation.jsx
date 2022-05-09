import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLogIn } from "redux/auth/auth-selectors";

import style from './Navigation.module.css';


function Navigation() {
    const isLogIn = useSelector(getIsLogIn);

    return (
        <nav>
            <NavLink exact="true" to="/" className={style.link} >Home</NavLink>
        
        {isLogIn && (
            <NavLink exact="true" to="/contacts" className={style.link} >Contacts</NavLink>
        )}
        </nav>
    )
}

export default Navigation;