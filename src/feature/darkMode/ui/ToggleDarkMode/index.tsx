import Sun from "./../icons/sun.svg";
import Moon from "./../icons/moon.svg";
import Image from "next/image";




export function ToggleDarkMode(){
  return(
    <div className="flex w-14 rounded-full bg-white">
       <Sun />
    </div>
  )
}