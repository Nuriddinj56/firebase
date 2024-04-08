import { create } from 'zustand'
import{User} from 'firebase/auth'

interface AuthState {
isloading: boolean;
error: string;
user: User;
setLoading: (bol:boolean)=>void;
setError: (err:string)=>void;
setUser: (user:User)=>void

}



export const useAuthStore = create<AuthState>((set) => ({
isloading: false,
error: '',
user: {}as User,
setLoading:(bol:boolean)=>set(state=>({...state,isloading:bol})),
setError:(err:string)=>set(state=>({...state,error:err})),
setUser:(user: User)=>set(state=>({...state,user:user})),
}))