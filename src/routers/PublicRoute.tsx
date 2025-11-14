import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  return isAuthenticated ? <Navigate to="/" replace /> : <>{children}</>;
};

export default PublicRoute;
