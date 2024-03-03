import './App.css';
import Layout from './Components/Layout/Layout';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Project from './pages/Projects/Project';
import Education from './pages/Education/Education';
import Internship from './pages/Internships/Internship';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import MobileNav from './Components/Layout/MobileNav';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Certification from './pages/Certification/Certification';

function App() {
   const [theme] = useTheme();  

  return (
    <>
      <div id={theme}>
        <ToastContainer position="top-center" autoClose={2000} pauseOnHover />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Skills />
          <Certification />
          <Project />
          <Internship />
          <Contact />
        </div>
      </div>
      <ScrollToTop
        smooth
        color="orange"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
