import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { Login , Register , Logout} from "../Services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext);

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({email, password}) => {

        setLoading(true);
        try{
        const data = await Login({email, password});
        setUser(data.user);
        }
        catch(err){
            return err
        }
        finally{
            setLoading(false); 
        }
            
    }

    const handleRegister = async ({username, email, password}) => {

        setLoading(true);
        try{
        const data = await Register({username, email, password});
        setUser(data.user);
        }
        catch(err){
            return err
        }
        finally{
        setLoading(false);  
        }   
    }

    const handleLogout = () => {
        setLoading(true)
        try{
            setUser(null);
        }
        catch(err){
            return err
        }
        finally{
            setLoading(false)
        }
    }

    return { user, loading, handleLogin, handleRegister, handleLogout };

}