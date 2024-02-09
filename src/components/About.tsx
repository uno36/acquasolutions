import {
  Grid,
  List,
  ListItem,
  ListItemText,  
} from "@mui/material";

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
      
    </>
  );
};

export default About;
