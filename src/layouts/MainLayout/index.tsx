

type Props = {
  contentSlot : React.ReactNode;
  navBarSlot  : React.ReactNode;
}


export default function MainLayout(props: Props){
  return(
    <div className="bg-gray-300 min-h-screen">
      <div className="w-[820px] mx-auto">
        <header className="mb-1">
          {props.navBarSlot}
        </header>
        <main className="bg-white rounded p-8 shadow-sm">
          {props.contentSlot}
        </main>
      </div>
    </div>
  )
}