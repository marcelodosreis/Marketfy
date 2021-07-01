import { useContext } from 'react';
import AuthContext from 'library/utilities/providers/Auth/Auth';

export const useAuth = () => useContext(AuthContext);

export default useAuth;
