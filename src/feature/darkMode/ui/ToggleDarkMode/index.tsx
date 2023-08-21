"use client"
import Sun from "./../icons/sun.svg";
import Moon from "./../icons/moon.svg";
import Image from "next/image";
import { ChangeEvent, FormEvent, CSSProperties, useState } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import { useColorMode } from "@/shared/hooks/useColorMode";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const variant : Variants = {
  dark: {
    justifyContent : "end"
  },
  light: {
    justifyContent: "start"
  }
}


export function ToggleDarkMode(){

  // checked true === light mode
  const [colorMode, setColorMode] = useColorMode();

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    setColorMode(e.target.checked ? "light" : "dark")
  }


  return(
    <div className="">
      <input onChange={handleCheck} type="checkbox" name="dark-button" id="dark-button" className="hidden" />
      <label 
        htmlFor="dark-button" 
        className={clsx(
          "flex w-14 rounded-full cursor-pointer bg-white p-1 max-h-6 hover:bg-gray-100",
          colorMode === "light" ? "justify-end" : "justify-start"
        )}
      >
        <motion.div 
          layout 
          transition={spring}  
          className=""
        >
          {colorMode === "light" 
            ? <Sun className="h-full" />
            : <Moon className="h-full" />
          }
        </motion.div>
      </label>
    </div>
  )
}