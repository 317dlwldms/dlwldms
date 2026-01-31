import "./Header.css";
import Logo from "asset/icons/favicon.svg";
import Nav from "./Nav/Nav";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header(){
    const [isOn, setIsOn] = useState(false);
    const headerRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    const isProjectPage = location.pathname.startsWith("/project");

    useEffect(() => {
        if(isProjectPage){
            setIsOn(false);
        }
    },[isProjectPage]);

    useEffect( ()=> {
        const handleClickOutside = (e) => {
            if(
                headerRef.current &&
                !headerRef.current.contains(e.target)
            ){
                setIsOn(false);
            }
        };
        if(isOn){
            document.addEventListener("mousedown",handleClickOutside);
        };
        return()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
        
    });


    const onClickHeader = () => {
        if(isProjectPage){
            navigate("/");
            return;
        };
        setIsOn(prev => !prev)
    }
    return(
        <div ref={headerRef} className={`Header ${isOn ? "on" : ""} ${isProjectPage ? "project" : ""}`} onClick={onClickHeader}>
            <div className="LogoTitle">
                <Link to={"/"}>
                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </Link>
                <p>dlwldms</p>
            </div>
            <Nav />
        </div>
    )
}