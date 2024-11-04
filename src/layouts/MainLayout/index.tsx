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
      <div className="max-w-[820px] mx-auto ">
        <header className="mb-1 bg-gray-300 dark:bg-gray-700">
          {props.navBarSlot}
        </header>
        <AnimatePresence mode="wait">
          <motion.main className="bg-white  rounded p-8 px-5 md:px-14 py-14 shadow-sm min-h-[100vh] dark:bg-gray-600 dark:text-gray-300">
            {props.contentSlot}
          </motion.main>
        </AnimatePresence>
          {props.footerSlot}
      </div>
    </div>
  )
}