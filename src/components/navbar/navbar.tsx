import useAuth from "../../hooks/useAuth"
import { useAuthStore } from "../../store/auth.store";



function NavigationTimingTypeavbar() {
    const {logout} = useAuth();
    const {isloading} = useAuthStore()

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg bg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    
   <button className="btn btn-outline-primary" onClick={logout} disabled={isloading}>
    {isloading ?'...':'logout'}
    </button>
  </div>
</nav>
    </div>
  )
}

export default NavigationTimingTypeavbar