import "./menu.scss"
import { menu } from "../../data"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((Item) => (
                <div className="item" key={Item.id}>
                    <span className="title">
                        {Item.title}
                    </span>
                    {Item.listItems.map((listItem) => (
                        <Link to={listItem.url} className='listItem'>
                            <img src={listItem.icon} alt="" />
                            <span className="listItemTitle">
                                {listItem.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Menu
