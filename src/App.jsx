import './App.css';
import {
  About,
  Header,
  Hero,
  Projects,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
