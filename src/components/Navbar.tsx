import {NavLink, useLocation, useParams } from "react-router-dom"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import HamMenu from "./HamMenu";
const Navbar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  let isHome=false;
  if(location.pathname=='/')
  {
    isHome=true;
  }
  return (
   <nav className={`bg-transparant h-16 flex items-center text-white absolute z-50 mb-10 p-10 justify-between w-full ${!isHome?"bg-blue-600":null}  max-sm:p-2`}>
    <div className="flex gap-4 text-lg font-medium max-md:hidden">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/hello"}>Destinations</NavLink>
        <NavLink to={"/"}>Contact</NavLink>
        <NavLink to={"/"}>About</NavLink>
    </div>
    <HamMenu/>
    <div className="flex gap-2 max-md:hidden">
        <Button className="" variant={"outline"} onClick={()=>navigate("/login")}>Login</Button>
        <Button className="bg-white text-black hover:bg-white" onClick={()=>navigate("/signup")}>Signup</Button>
    </div>
   </nav>
  
  )
}

export default Navbar
