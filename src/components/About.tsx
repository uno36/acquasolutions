import {
  Grid,
  List,
  ListItem,
  ListItemText,  
} from "@mui/material";

import {
  TiSocialPinterest,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";

import { FiDribbble } from "react-icons/fi";


const message = `Acquasolutions boasts a dedicated team of professionals committed to excellence in water treatment and borehole installations.`;
const About = () => {
  return (
    <>
      <div className="mx-5 my-3">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>About Us</h2>
            <p>
              Welcome to our website! We are a leading provider of water
              treatment and borehole installation services.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality and sustainable solutions
              for water treatment and borehole installations to meet the needs
              of our clients.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h2>Why Choose Us?</h2>
            <List dense>
              <ListItem>
                <ListItemText primary="Experienced professionals with expertise in water treatment and borehole installations." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customized solutions tailored to meet the specific requirements of each client." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Use of advanced technologies and environmentally friendly practices." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Excellent customer service and support throughout the project lifecycle." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Commitment to delivering projects on time and within budget." />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <h2>Our Services</h2>
            <List dense>
              <ListItem>
                <ListItemText primary="Water Treatment" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Borehole Installations" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Water Testing and Analysis" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Maintenance and Repairs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Consultancy Services" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <p>
              For more information about our services or to discuss your project
              requirements, please <a href="/contact">contact us</a>.
            </p>
          </Grid>
        </Grid>
      </div>
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">The Team Behind Acquasolutions</h2>
              <p className="section-subtitle">{message}</p>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                  className="team-img"
                  alt="pic"
                />
                <h3>JOHNATHAN HAWKINS</h3>
                <div className="team-info">
                  <p>Head of SEO</p>
                </div>
                <p>
                  With over a decade of experience in water treatment, Johnathan
                  is passionate about delivering sustainable solutions to ensure
                  clean and safe water for all.
                </p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter" title="Twitter">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest" title="Pinterest">
                      <TiSocialPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook" title="Facebook">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribble" title="Dribble">
                      <FiDribbble />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                  className="team-img"
                  alt="pic"
                />
                <h3>ALEXANDRA SMITHS</h3>
                <div className="team-info">
                  <p>SEO Specialist</p>
                </div>
                <p>
                  With a background in civil engineering, Alexandra brings
                  expertise in borehole installations, ensuring reliable access
                  to groundwater for our clients.
                </p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter" title="Twitter">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest" title="Pinterest">
                      <TiSocialPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook" title="Facebook">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribble" title="Dribble">
                      <FiDribbble />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                  className="team-img"
                  alt="pic"
                />
                <h3>ELISA JOHANSON</h3>
                <div className="team-info">
                  <p>Marketing Manager</p>
                </div>
                <p>
                  Elisa brings a creative approach to marketing, leveraging
                  digital strategies to promote Acquasolutions' mission and
                  services effectively.
                </p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter" title="Twitter">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest" title="Pinterest">
                      <TiSocialPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook" title="Facebook">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribble" title="Dribble">
                      <FiDribbble />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
