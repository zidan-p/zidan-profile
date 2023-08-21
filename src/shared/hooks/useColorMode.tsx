import { color } from "framer-motion";
import {useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage"



export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(()=>{
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)

  },[color])

  return [colorMode, setColorMode]
}