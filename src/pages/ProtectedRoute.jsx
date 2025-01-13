import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
