import clsx from "clsx";


type Props = {
  children: string;
  isActive?: boolean;
}


export function NavList(props: Props){
  return(
    <li className={clsx("relative hover:text-black text-sm", props.isActive ? "text-black" : "text-gray-600")}>
      <button>
        {props.children}
        {props.isActive &&
          <div className="bg-yellow-500 w-full h-[2px] rounded-full" />
        }
      </button>
    </li>
  )
}