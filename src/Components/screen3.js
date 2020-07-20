import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {ReactComponent as Image} from './Images/undraw_typewriter_i8xd.svg'

const useStyles = makeStyles((theme) => ({
  screen2: {
    backgroundImage: "linear-gradient(-60deg,#5F0A87, #A4508B)",
    backgroundSize: "100%",
    top: 0,
    width: "100%",
    height: "700px",
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
  },
  typoDiv: {
    margin: 50,
    width: 600,
  },
  typo1: {
    fontWeight: 500,
    fontSize: "50px",
    marginBottom: 70
  },
  typo2: {
    fontSize: "16px",
    fontWeight: 100,
    marginTop: "-46px",
  },
  list: {
    fontSize: "16px",
    fontWeight: 400,
    marginTop: 50,
    display: "inline",
    marginRight: 30,
    lineHeight: 3,
    textDecoration: "dotted",
  },
  image: {
    height: 400,
    width: 500,
    margin: "auto",
    marginTop: 80,
  },
}));

export const Screen3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.screen2}>
      <div className={classes.typoDiv}>
        <Typography className={classes.typo1}> Website Copywriting </Typography>
        <Typography className={classes.typo2}> 
        Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.
        </Typography>
        <ul >
            <li className={classes.list} >Information Architecture</li>
            <li className={classes.list}>Wireframes</li>
            <li className={classes.list}>Competitor Analysis</li>
            <li className={classes.list} >On-page SEO</li>
            <li className={classes.list}>Off-page SEO</li>
            <li className={classes.list}>USP/UVP</li>
            <li className={classes.list}>Landing Page</li>
            <li className={classes.list}>Sales Letter</li>
        </ul>
      </div>
      <div>
        <Image className={classes.image} />
      </div>
    </div>
  );
};
