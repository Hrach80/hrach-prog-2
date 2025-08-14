import { Link } from "react-router-dom"
import "../NavBox/NavBox.css"
export const NavBox = () => {
    return (
        <div className="nav-box">
            <Link className="link-nav" to="/Օնլայն Խանութ" >Համակարգիչներ</Link>
            <Link className="link-nav" to="/Էլեկտրոնիկա">Էլեկտրոնիկա</Link>
            <Link className="link-nav" to="/Կենցաղային ապրանքներ">Կենցաղային ապրանքներ</Link>
            <Link className="link-nav" to="/Շինանյութ">Շինարարական տեխնիկա</Link>
            <Link className="link-nav" to="/Մեր Մասին">Մեր Մասին</Link>
        </div>
    )
}
