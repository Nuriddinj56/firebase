
import {onAuthStateChanged, User} from 'firebase/auth'
import { createContext ,ReactNode,useEffect,useMemo, useState} from 'react';
import { useAuthStore } from '../../store/auth.store';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase'

 interface AuthContextState{
    user:User;
    isloading:boolean;
}

 const AuthContext= createContext<AuthContextState>({
    isloading:false,
    user: {} as User,
})

export const AuthProvider=({children}:{children:ReactNode})=>{
    const [initialLoader,setinitialLoader]=useState<boolean>(true)
    const {user,isloading,setUser,setLoading}=useAuthStore()
    const navigate =useNavigate()
    const value =useMemo(
     ()=>({
        user,
        isloading
     }), 
     [user,isloading]
    )
    useEffect(()=> onAuthStateChanged(auth,user =>{
        if(user){
            setUser(user)
            navigate('/')
        }else{
            setLoading(true)
            setUser({}as User)
            navigate('/auth')
        }
        setinitialLoader(false)
        setLoading(false)
    }))
    return <AuthContext.Provider value={value}> {initialLoader ? 'Loading...' : children}</AuthContext.Provider>
}