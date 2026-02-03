import Main from "components/home/Main/Main";
import "./Home.css";
import About from "components/home/About/About";
import Header from "components/common/Header/Header";
import Projects from "components/home/Projects/Projects";

export default function Home(){
    return(
        
        <div className="Home">
            <Header/>
            <Main />
            <Projects />
            <About />
        </div>
    )
}