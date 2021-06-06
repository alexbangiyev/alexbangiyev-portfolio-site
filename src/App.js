import './App.css';
import AboutPage from './components/aboutPage'
import FrontPage from './components/frontPage';
import ContactPage from './components/contactPage'
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;