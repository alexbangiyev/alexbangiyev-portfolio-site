import './FrontPage.css'
import React from "react"
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "design",
  "code",
  "create"
];

const FrontPage = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2500 // every 2.5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="Front-page">
      <p>I<span> </span>
          <TextTransition
            className="Transition-div"
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
      </p>
      <h1 className="Front-page-h1">Hey, my name is Alex, and I am a full stack software engineer.</h1>
      <a
        className="Links"
        href="/alex_bangiyev_resume.pdf"
        target="_blank"
        color="#FFA233"
      >View My Resume
      </a>
    </div>
  );
}

export default FrontPage;