import { useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorage } from "../../shared/hooks/useLocalStorage";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const tokenRef = useRef(getLocalStorage("tokenId"));
  let location = useLocation();

  if (!tokenRef.current) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
