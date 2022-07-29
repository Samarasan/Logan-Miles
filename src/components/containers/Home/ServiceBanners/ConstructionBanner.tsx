import { styled, Paper, Box, Grid } from "@material-ui/core";
import React from "react";
import abtlog from '../../../../assets/image/LOGAN/IMAGES/abt.svg'

export const AboutBanner = () => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
  }));
  return (
    <React.Fragment>
      <Box style={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            style={{
              padding: "0px",
              position:"relative"
            }}
          >
           {/* <img src={about} alt="about" className="aboutLog" style={{
             objectFit:'cover'
           }} /> */}
           <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            objectFit:"cover",
            height:"38em"
          }}
          className="slideimg"
        >
          <source
            src="https://video.wixstatic.com/video/11062b_87255e309621491c88d43f1a3937f59c/480p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="abtText">
        <h1 className="we">
          Logan <br /> 50 MILES
        </h1>
      
      </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              padding: "0px",
            }}
          >
            <Item>
              {" "}
              <div className="hp_text-wrapper mt">
                <img src={abtlog} alt="skateboard" />
                <h2 className="u-h1">
                  ABOUT <br /> LOGAN 50 MILES
                </h2>
              </div>
            </Item>
            <div className="aboutText">
              <p>
                Our team of experts has selected the best skateboards out of
                hundreds of models. Based on our research, we’ve narrowed down
                the list to models from Minority, KPC, Aceshin, Magneto, and
                WhiteFang. We named Minority as the Best of the Best in our Best
                Skateboards category because of its superior quality and great
                consumer experience. We chose the KPC as our Best Bang for the
                Buck because of its overall quality and value. Read our full
                review for our pros, cons, and bottom line on each of the models
                we chose for our top five.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
