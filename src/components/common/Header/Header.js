import "./Header.css";
import Logo from "asset/icons/favicon.svg";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className= "Header">
            <Link to={"/"} className="logo_wrap">
                <img src={Logo} alt="Logo"/>
                <h1>dlwldms</h1>
            </Link>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}