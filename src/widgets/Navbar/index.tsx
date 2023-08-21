import { ToggleDarkMode } from "@/feature/darkMode"
import { NavList } from "./components/NavList"





export default function NavBar(){
  return(

    <nav className="flex justify-between p-2 pt-4 pb-0">
      <div className="flex gap-9">
        <div className="text-gray-500 font-light">
          Zidan Putra....
        </div>
        <ul className="flex gap-6 font-semibold">
          <NavList path="/" isActive={true}> Home </NavList>
          <NavList path="about"> About </NavList>
          <NavList path="project"> Project </NavList>
        </ul>
      </div>
      
      <ToggleDarkMode />
    </nav>
  )
}