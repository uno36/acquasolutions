import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <>
      <div className="footer d-flex justify-content-between align-items-center">
        <h1 className="footer-heading" >ACQUASOLUTIONS</h1>
        <div className="footer-icons d-flex ">
          <FaFacebookF />
          <LinkedInIcon />
          <FaInstagram />
          <XIcon />
        </div>
      </div>
    </>
  );
};

export default Footer;
