import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';

import style from './UserMenu.module.css';


function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    return (
        <div className={style.box}>
            <p className={style.text}>Wellcome {name}!</p>

            <button 
                type='button'
                onClick={() => dispatch(logOut())}
            >
                logout
            </button>
        </div>
    )
}

export default UserMenu;
