import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

/* Steps:
    1. Only allow authenticated user to visit the route
    2.
    3. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return (
         <div className="mx-auto my-5 w-100 h-100">
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
         </div>
      );
   }
   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
};

export default PrivateRoute;
