import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="About-page" id="aboutPage">

      <h1 className="About-page-h1">About</h1>

      <p className="About-section">I'm a Full Stack Software Engineer located in New York City. My goal is to continue to develop my skills as a software developer, and to be a part of building technologies that move the world forward.</p>

      <span className="About-span" >
        <a href="https://github.com/alexbangiyev" target="blank">
          <img src="github-logo-white.png" alt="Github Logo" width="50" height="50" />
        </a>

        &nbsp;
        &nbsp;
        &nbsp;

        <a href="https://www.linkedin.com/in/alex-bangiyev/" target="blank">
          <img src="linkedin-logo-white.png" alt="Github Logo" width="50" height="50" />
        </a>
      </span>

    </div>
  );
}

export default AboutPage;