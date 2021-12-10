import { useContext } from 'react';
import {Authcontext} from '../Context/Authprovider';
const useAuth = () => {
    return useContext(Authcontext)
}

export default useAuth;