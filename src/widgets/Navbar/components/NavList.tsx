"use client"
import { NavLink } from "@/shared/ui/NavLink";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";


type Props = {
  children: string;
  isActive?: boolean;
  path: string;
}


export function NavList(props: Props){
  
  return(
    <li className={clsx("relative hover:text-black text-sm", props.isActive ? "text-black" : "text-gray-600")}>
        <Link href={props.path}>
          {props.children}
          {props.isActive &&
            <div className="bg-yellow-500 w-full h-[2px] rounded-full" />
          }
        </Link>
    </li>
  )
}