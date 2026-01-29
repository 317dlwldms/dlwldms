import Main from "components/home/Main/Main";
import "./Home.css";
import About from "components/home/About/About";

export default function Home(){
    return(
        <div className="Home">
            <Main />
            <About />
        </div>
    )
}