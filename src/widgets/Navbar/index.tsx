import { ToggleDarkMode } from "@/feature/darkMode"
import { NavList } from "./components/NavList"





export default function NavBar(){
  return(

    <nav className="flex justify-between p-2 pt-4 pb-1">
      <div className="flex gap-9">
        <div className="text-gray-500 font-light dark:text-gray-400">
          Zidan Putra....
        </div>
        <ul className="md:flex gap-6 font-semibold hidden">
          <NavList path="/"> Home </NavList>
          <NavList path="about"> About </NavList>
          <NavList path="project"> Project </NavList>
          <NavList path="certificate"> Certificate </NavList>
        </ul>
      </div>
      
      <ToggleDarkMode />
    </nav>
  )
}