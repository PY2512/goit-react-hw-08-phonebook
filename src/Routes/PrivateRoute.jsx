import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLogIn } from 'redux/auth/auth-selectors';


export default function PrivateRoute({
    children,
}) {
    const isLogIn = useSelector(getIsLogIn);

    return isLogIn ? children : <Navigate exact="true" to="login" replace={true} />


}