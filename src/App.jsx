import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import './App.css';
import { Header } from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';


const HomeView = lazy(() => import('./views/HomeView/HomeView' /*webpackChunkName: "HomeView" */),
);

const RegisterView = lazy(() => import('./views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() => import('./views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */),
);



function App(){
    const isFetchingCurrentUser = useSelector(getIsFetchingCurrent)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

        return (
            !isFetchingCurrentUser && (
                <>
                    <Header />
                    
                    <main style={{ padding: '20px 10px 20px 10px' }}>
                        <Suspense fallback={<h1>Loading...</h1>}>

                            <PublicRoute exact="true" path="/" restricted>
                                <HomeView />
                            </PublicRoute> 
                            <PublicRoute exact="true" path="/register" restricted>
                                <RegisterView />
                            </PublicRoute>
                            <PublicRoute exact="true" path="/login" restricted redirectTo="/contacts">
                                <LoginView />
                            </PublicRoute>
                            <PrivateRoute exact="true" path="/contacts" redirectTo="/login">
                                <ContactsView />
                            </PrivateRoute>

                        </Suspense>
                        </main>
                    <Footer />
                </>
            )
        );
};

export default App;
