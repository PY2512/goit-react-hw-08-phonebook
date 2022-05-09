import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogIn } from 'redux/auth/auth-selectors';


export default function PublicRoute({
    children,
    restricted = false,
    // navigateTo = '/',
    // ...routeProps
}) {
    const isLogIn = useSelector(getIsLogIn);
    const shouldRedirect = isLogIn && restricted;

    return (
        <>
            {shouldRedirect ? <Navigate exact="true" to="/phonebook"  replace={true} /> : children}
        </>
    );
}