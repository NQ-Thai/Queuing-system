import { Navigate, RouteProps as ReactRouteProps, Route } from 'react-router-dom';
import { auth } from '../lib/firebase';

type RequireAuthRouteProps = ReactRouteProps & {
    element: JSX.Element;
};

function RequireAuthRoute({ element, ...rest }: RequireAuthRouteProps) {
    const isLoggedIn = auth.currentUser !== null;

    return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/" replace />;
}

export default RequireAuthRoute;

export function requireAuth() {
    return auth.currentUser !== null ? true : false;
}
