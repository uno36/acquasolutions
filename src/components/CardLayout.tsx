import CardComp from "./CardComp";
import Data from "./Data";
import Grid from "@mui/material/Grid";

const CardLayout = () => {
  return (
    <div>
      <div>
        <h1 className="my-3 mx-5">Portfolio</h1>
        <div>
          <Grid container>
            {Data.map((item, index) => (
              <Grid item xs={12} md={4} lg={3}>
                <CardComp key={index} data={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
