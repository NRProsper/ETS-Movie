import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ element }) => {
    const email = useSelector((state) => state.user.email);

    return email ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;