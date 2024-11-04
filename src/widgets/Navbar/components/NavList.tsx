"use client"
import { NavLink } from "@/shared/ui/NavLink";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {motion} from "framer-motion";


type Props = {
  children: string;
  path: string;
}


export function NavList(props: Props){
  const pathName = usePathname();


  const isActive = useMemo<boolean>(()=>{
    const dividedPath = pathName.split("/");
    if(dividedPath[1] === props.path)
      return true;

    if(dividedPath[1] === "" && props.path === "/")
      return true;
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pathName])

  return(
    <li className={clsx(
        `relative hover:text-black text-sm `, 
        isActive ? "text-black dark:text-gray-400 " : "text-gray-600 dark:hover:text-gray-400"
    )}>
      <Link href={props.path}>
        {props.children}
        {isActive &&
          <motion.div layoutId="navbar-underline" className="bg-yellow-500 w-full h-[2px] rounded-full" />
        }
      </Link>
    </li>
  )
}