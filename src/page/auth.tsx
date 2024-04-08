import { FormEvent, useState } from "react"
import UseAuth from "../hooks/useAuth"
import { useAuthStore } from "../store/auth.store"
import { useNavigate } from "react-router-dom"

function Auth() {
    const [auth,setAuth]=useState<'signup' | 'signin'>('signin')
    const [email,setEmail] =useState<string>('')
    const [password,setPassword] =useState<string>('')
    const [invalid,setInvalid] =useState<boolean>(false)
    const {singUp, singIn,} =UseAuth()
    const {isloading,user,error}=useAuthStore()
     const navigate = useNavigate()

    if(user){
      navigate('/')
    }
   const toggleAuth =(state: 'signup' | 'signin')=>{
      setAuth(state)
    };

const onSubmit =(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!password.length || !email.length){
        setInvalid(true)
    }else{
        setInvalid(false)
    }
    if(auth === 'signup'){

        singUp(email,password)
    }else{
        singIn(email,password)
    }
    
    
}

  return (
    <main className="container form-signin text-center mt-5 ">
  <form onSubmit={onSubmit} className="m-auto w-50">
    <h1 className="h3 mb-3 fw-normal">{auth == 'signin' ? 'Sign in' : 'Sign up'}</h1>
    {error && <div className="alert alert-danger">{error}</div>}
    <div className="form-floating">
      <input
      onChange={e=>setEmail(e.target.value)}
      value={email}

      type="email" className={`form-control ${invalid && 'is-invalid'}`} id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-2">
      <input
      onChange={e=>setPassword(e.target.value)}
      value={password}
      type="password" className={`form-control ${invalid && 'is-invalid'}`} id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

   
    <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isloading} type="submit">
        { auth == 'signin' ? 'Sign in' : 'Sign up'}</button>
    <p className="mt-2 fw-bold">
        {auth ==='signup'?'Already have account':' Not account yet '}
       
    {auth =='signup'? (

    <span  className=" fw-normal text-primary pointer " onClick={()=>toggleAuth('signin')}
     style={{cursor:"pointer"}}>  Sign in</span>
    ):(
        <span  className=" fw-normal text-primary pointer " onClick={()=>toggleAuth('signup')}
         style={{cursor:"pointer"}}>  Sign up now</span>
        
    )} </p>
  </form>
</main>
  )
}

export default Auth