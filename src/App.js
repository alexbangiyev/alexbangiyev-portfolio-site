import './App.css';
import FrontPage from './components/frontPage';
import ProjectsPage from './components/projectsPage';
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;