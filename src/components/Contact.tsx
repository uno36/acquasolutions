import { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sendCopy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      sendCopy: false,
    });
  };

  return (
    <div className="text-center m-5">
      <Typography variant="h5" gutterBottom>
        Contact us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          type="email"
          label="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sendCopy}
              onChange={handleChange}
              name="sendCopy"
            />
          }
          label="Send me copy"
        />
        <Button
          type="submit"
          variant="contained"
          className="bg-dark"
          fullWidth
          sx={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
