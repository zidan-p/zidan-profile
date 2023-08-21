"use client"
import {AnimatePresence, motion} from "framer-motion";

type Props = {
  contentSlot : React.ReactNode;
  navBarSlot  : React.ReactNode;
  footerSlot  : React.ReactNode;
}


export default function MainLayout(props: Props){
  return(
    <div className="bg-gray-300 min-h-screen dark:bg-gray-700">
      <div className="w-[820px] mx-auto ">
        <header className="mb-1 bg-gray-300 dark:bg-gray-700">
          {props.navBarSlot}
        </header>
        <AnimatePresence mode="wait">
          <motion.main className="bg-white  rounded p-8 shadow-sm min-h-[100vh] dark:bg-gray-600 dark:text-white">
            {props.contentSlot}
          </motion.main>
        </AnimatePresence>
          {props.footerSlot}
      </div>
    </div>
  )
}