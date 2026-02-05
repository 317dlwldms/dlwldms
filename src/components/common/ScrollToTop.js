import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);
    return null;
}

//페이지 클릭하면 페이지 맨 위로 이동