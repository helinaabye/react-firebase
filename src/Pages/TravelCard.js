import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
    label: <span>Arba Minch, Ethiopia <br/>Photo by <a href="https://unsplash.com/@taypaigey?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Taylor Wilcox</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/SPv-vFzuA5Q/download?force=true&w=640',
  },
  {
    label: <span>Lalibela, Ethiopia <br/>Photo by <a href="https://unsplash.com/@onestopproductions?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mulugeta Wolde</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/6SgfEwkA02Y/download?force=true&w=640',
  },
  {
    label: <span>Salt flats, Danikil Depression, Ethiopia <br/>Photo by <a href="https://unsplash.com/@lderksen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lesly Derksen</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/r0c_9MUD6lc/download?force=true&w=640',
  },
  {
    label: <span>Sunrise, Addis Ababa, Ethiopia <br/>Photo by <a href="https://unsplash.com/@gift_habeshaw?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gift Habeshaw</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/jbr6D4wjD5k/download?force=true&w=640',
  },
  {
    label: <span>Lalibela, Ethiopia <br/>Photo by <a href="https://unsplash.com/@erikhathaway?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Erik Hathaway</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/eRFC0_U0hGE/download?force=true&w=640',
  },
  {
    label: <span>Salt harvesting, Danikil Depression, Ethiopia <br/>Photo by <a href="https://unsplash.com/@lderksen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lesly Derksen</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>,
    imgPath:
      'https://unsplash.com/photos/v1pcGRXSmW8/download?force=true&w=640',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function TravelCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default TravelCard;
