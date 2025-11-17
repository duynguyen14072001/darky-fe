import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  return !isAuthenticated ? <Navigate to="/login" replace /> : <>{children}</>;
};

export default PrivateRoute;
