"use client"
import {useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage"



export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(()=>{
    if (typeof window === "undefined") return;
    const className = "dark";
    const bodyClasses = window.document.body.classList;
    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)

  },[colorMode])

  return [colorMode, setColorMode]
}