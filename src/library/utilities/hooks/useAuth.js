import { useContext } from 'react';
import AuthContext from '@/library/utilities/providers/Auth/Auth';

const useAuth = () => useContext(AuthContext);

export default useAuth;
