import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface CardcompProps {
  data: {
    imgsrc: string;
    title: string;
    description: string;
  };
}
const CardComp: React.FC<CardcompProps> = ({ data }) => {
  return (
    <div className="mx-5 my-3">
      <Card
        component="div"
        sx={{ maxWidth: 350, "@media (max-width: md)": { maxWidth: 250 } }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.imgsrc}
            alt="slide"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComp;
