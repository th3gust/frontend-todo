import { useContext } from "react";
import { AuthContext, AuthContextProps } from "./context";

export const useAuth = () => useContext(AuthContext) as AuthContextProps