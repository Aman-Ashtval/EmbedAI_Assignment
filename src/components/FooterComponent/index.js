import { BsStars } from "react-icons/bs";

import "./index.css";

const FooterComponent = () => {
  return (
    <div className="footer-bg">
      <div className="d-flex flex-column align-items-center">
        <div className="img-container">
          <img
            src="https://img.freepik.com/free-photo/3d-cartoon-portrait-working-woman-celebration-labour-day_23-2151306599.jpg?t=st=1712836752~exp=1712840352~hmac=e98b51b46a629b0de983d3ff79db5cb13f10d81de95650a3fec3ad9613bbb98f&w=740"
            alt=""
            className="footer-card-img transform-left"
          />
          <img
            src="https://img.freepik.com/free-photo/fantasy-water-character_23-2151149397.jpg?t=st=1712835802~exp=1712839402~hmac=eaa8a387e57af53b011ccd81fc4b5d56dcac0b38c4cdb764beb0f8bdbfbd06ba&w=740"
            alt=""
            className="footer-card-float-img"
          />
          <img
            src="https://img.freepik.com/free-photo/fantasy-rama-navami-celebration_23-2151400319.jpg?t=st=1712835888~exp=1712839488~hmac=db21bfceaf5646267467f8d6740809874d318827160e1ae8564c2431c9c827dc&w=740"
            alt=""
            className="footer-card-img transform-right "
          />
        </div>
        <p className="create-character-title">Create a Character</p>
        <p className="create-character-description">
          Not vibing with any characters? Create one of your own! Customize
          <br />
          things like their voice, conversation starts, their tone, and more!
        </p>
        <button type="button" className="footer-create-character-btn">
          <BsStars className="mr-2" />
          Create a Character
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a className="footer-link">About</a>
        <a className="footer-link">Careers</a>
        <a className="footer-link">Blogs</a>
      </div>
    </div>
  );
};

export default FooterComponent;
