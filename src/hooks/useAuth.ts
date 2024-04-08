import { createUserWithEmailAndPassword,signOut } from "firebase/auth";
// import { useState } from "react"
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
import {User} from 'firebase/auth'
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { useAuthStore } from "../store/auth.store";

function UseAuth() {
 
    // const [isloading,setLoading]=useState< boolean>(false)
    // const  [error, setError] = useState <string>('')
    // const [user, setUser] =useState <User>({} as User)
    //useAuthStore() ishlatiganiga bu useStatelar ishlatilmayapti

    const {user,setUser,isloading,setLoading,error,setError} =useAuthStore()

    const navigate = useNavigate()

    const singUp = async(email:string, password:string)=>{
        setLoading(true);
        await createUserWithEmailAndPassword(auth,email,password)
        .then(res =>{
            setUser(res.user);
            setLoading(false)
            navigate('/')
        }).catch(error =>{
            const result =error as Error;
            setError(result.message);
        })
            .finally(()=>setLoading(false))
    };

    const singIn = async(email:string, password:string)=>{
        setLoading(true);
        await signInWithEmailAndPassword(auth,email,password)
        .then(res =>{
            setUser(res.user);
            setLoading(false)
            navigate('/')
        }).catch(error =>{
            const result =error as Error;
            setError(result.message);
        })
            .finally(()=>setLoading(false))
    };
    
    const logout =()=>{
        setLoading(true);

        signOut(auth)
        .then(()=>{
            setUser({}as User)
            navigate('/auth')
        })
        .catch((err)=>{
            const result = err as Error;
            setError(result.message)
        }).finally(()=>setLoading(false))
    };

    return{ singIn,singUp,logout,user,error,isloading}
}

export default UseAuth