import Main from "components/home/Main/Main";
import "./Home.css";
import About from "components/home/About/About";
import Work from "components/home/Work/Work";
import Header from "components/common/Header/Header";

export default function Home(){
    return(
        <div className="Home">
            <Header/>
            <Main />
            <Work />
            <About />
        </div>
    )
}