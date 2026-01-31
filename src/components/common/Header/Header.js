import "./Header.css";
import Logo from "asset/icons/favicon.svg";
import Nav from "./Nav/Nav";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [isOn, setIsOn] = useState(false);
    const headerRef = useRef(null);


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
        setIsOn(true)
    };
    return(
        <div ref={headerRef} className={`Header ${isOn ? "on" : ""}`} onClick={onClickHeader}>
            <div className="LogoTitle">
                <Link to={"/"}>
                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </Link>
                <p>dlwldms</p>
            </div>
            <Nav setIsOn={setIsOn} />
        </div>
    )
}