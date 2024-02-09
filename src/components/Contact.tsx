import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  Grid,
  Container,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", 
    },
  },
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid container spacing={3} sx={{ mt: 5, mb: 5 }}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>
              Contact Us
            </Typography>            
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ mb: 2 }} onChange={handleSubmit}>
              <InputLabel id="subject-label">Subject</InputLabel>
              <Select
                labelId="subject-label"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <MenuItem value="general">General Inquiry</MenuItem>
                <MenuItem value="service">Inquiry about a Service</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className="bg-dark" type="submit" fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
