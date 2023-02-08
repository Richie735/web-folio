import './App.css';
import {
  About,
  Experience,
  Header,
  Hero,
  Projects,
  Skills,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
