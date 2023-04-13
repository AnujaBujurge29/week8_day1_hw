export default function Sidebar() {
  const menu = [
    { id: 1, name: "Dashboard" },
    { id: 2, name: "Widget" },
    { id: 3, name: "Reviews" },
    { id: 4, name: "Customers" },
    { id: 5, name: "Online Analysis" },
    { id: 6, name: "Setting" },
  ];
  const displayMenu = menu.map(e=>{
    return(
        <div>
            <p>{e.id}. {e.name}</p><br/>
        </div>
    )
  })
  return <div>{displayMenu}</div>
}
