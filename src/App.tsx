import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {TechStack} from './layout/sections/techStack/TechStack';
import {Projects} from './layout/sections/projects/Projects';
import {AboutMe} from './layout/sections/aboutMe/AboutMe';
import {Footer} from './layout/footer/Footer';
import {Contact} from './layout/sections/contact/Contact';

import {Particle} from "./components/particle/Particle";
import {GoTop} from "./components/goTop/GoTop";



function App() {
    // @ts-ignore
    return (
        <div className="App">
            <GoTop/>
            <Particle/>
            <Header></Header>
            <Main></Main>
            <Projects></Projects>
            <TechStack></TechStack>
            <AboutMe></AboutMe>
            <Contact/>
            <Footer></Footer>

        </div>
    );
}

export default App;
