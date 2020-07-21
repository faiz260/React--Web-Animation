import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles} from "@material-ui/core/styles";
import {ReactComponent as Image} from './Images/undraw_typewriter_i8xd.svg'
import useWebAnimations, {rubberBand, bounce
} from "@wellyshen/use-web-animations"
import "./screen1.css"

const useStyles = makeStyles((theme) => ({
    screen1: {
        backgroundImage: "linear-gradient(-60deg,#4b06c1,#ce02bd)",
        backgroundSize: "cover",
        top: 0,
        width: "100%",
        height: "100%",
        fontFamily:"'Montserrat', sans-serif",
        color: "white",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
    },
    typoDiv:{
        margin: 50,
        width: 400,
    },
    typo1:{
        fontWeight: 500,
        fontSize: "100px",
    },
    typo2:{
        fontSize: "60px",
        fontWeight: 400,
        marginTop: "-46px"
    },
    typo3:{
        fontSize: "22px",
        fontWeight: 400,
        marginTop: 50
    },
    image:{
        height: 500,
        width: 600,
        margin: "auto",
        marginTop: 80,
        animation: "rubberBand",
        animationDuration: "2s"
    }
  }));

export const Screen1 = () => {
  const classes = useStyles();
  const { ref} = useWebAnimations({ 
    //   ...bounce,
    keyframes: [
        
      {transform: "translate(0,0)"},
      {transform: "translate(0,10px)"},
    ],  
    timing: {
      delay: 500, 
      duration: 1000, 
      iterations: Infinity, 
      direction: "alternate",
      easing: "ease-in-out", 
    },
  });


    return (
        <div className={classes.screen1}>
            <div className={classes.typoDiv}>
            <Typography  className={classes.typo1}> CORTEX </Typography>
            <Typography  className={classes.typo2}> COPYWRITER </Typography>
            <Typography  className={classes.typo3}> Enhance your communications with psychology-based copywriting and UX writing </Typography>
            </div>
            <div ref={ref} >
                <Image className={classes.image}/>
            </div>
        </div>
    )
}
