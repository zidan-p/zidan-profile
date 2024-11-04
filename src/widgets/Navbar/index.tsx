import { ToggleDarkMode } from "@/feature/darkMode"
import { NavList } from "./components/NavList"





export default function NavBar(){
  return(
    <>
      <nav className="flex justify-between p-2 pt-4 pb-1">
        <div className="flex gap-9">
          <div className="text-gray-500 font-light dark:text-gray-400 shrink-0">
            Zidan Putra....
          </div>
          <div className=" overflow-x-hidden shrink">
            {/* lorem */}
          </div>
        </div>
        
        <ToggleDarkMode />
      </nav>
      <ul className=" flex gap-6 font-semibold px-2 overflow-auto">
        <NavList path="/"> Home </NavList>
        <NavList path="about"> About </NavList>
        <NavList path="project"> Project </NavList>
        <NavList path="certificate"> Certificate </NavList>
      </ul>
    </>
  )
}