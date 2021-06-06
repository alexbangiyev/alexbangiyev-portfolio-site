import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className>

      <h1 className="Contact-page-h1">Contact</h1>

      <form>
        <input className="Inputs" type="text" name="name" placeholder="Name" />
        <br></br>

        <input className="Inputs" type="text" name="email" placeholder="Email" />
        <br></br>

        <input className="Inputs" type="text" name="message" placeholder="Message" />
        <br></br>

        <input className="Submit" type="submit" value="Submit" />
      </form>

      <span className="Contact-span" >
        <a href="https://github.com/alexbangiyev" target="blank">
          <img src="github-logo.png" alt="Github Logo" width="50" height="50" />
        </a>

        &nbsp;
        &nbsp;
        &nbsp;

        <a href="https://www.linkedin.com/in/alex-bangiyev/" target="blank">
          <img src="linkedin-logo.png" alt="Github Logo" width="50" height="50" />
        </a>
      </span>

    </div>
  );
}

export default ContactPage;