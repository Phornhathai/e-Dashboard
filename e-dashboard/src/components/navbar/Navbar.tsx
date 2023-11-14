import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="./public/logo.svg" alt="" />
            <span>aum-admin</span>
        </div>
        <div className="icons">
            <img src="./public/search.svg" alt="" className="icon"/>
            <img src="./public/app.svg" alt="" className="icon"/>
            <img src="./public/expand.svg" alt="" className="icon"/>
            <div className="notificaiton">
                <img src="./public/notifications.svg" alt="" className="icon"/>
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_nBWZBz76c8NmejXRreggbs7uba48cUhxaM4Kp8&s" alt="" />
                <span>Aummii</span>
            </div>
            <img src="./public/setting.svg" alt="" className="icon"/>
        </div>
    </div>
      
  )
}
export default Navbar
