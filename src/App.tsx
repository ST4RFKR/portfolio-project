import './App.css';
import styled from 'styled-components';
import { Container } from './components/container/Container.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { TechStack } from './layout/sections/techStack/TechStack';
import { Projects } from './layout/sections/projects/Projects';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import { Footer } from './layout/footer/Footer';
import { Contact } from './layout/sections/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Projects></Projects>
      <TechStack></TechStack>
      <AboutMe></AboutMe>
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
