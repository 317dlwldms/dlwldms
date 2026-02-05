import "./Header.css";
import Logo from "asset/icons/favicon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [showHeader, setShowHeader] = useState(false);
    
    useEffect(()=> {
        const projectSection = document.getElementById("project");
        const handleScroll = () => {
            if(!projectSection) return;
            const triggerPoint = projectSection.getBoundingClientRect().top + window.scrollY;
            setShowHeader(window.scrollY >= triggerPoint - 80);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll)
    },[]);
    return(
        <div className={`Header ${showHeader ? "on" : ""}`}>
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