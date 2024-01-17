import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/c88267c1-f505-481f-b636-e33956c4b1b9.png?format=avif',
  },
  {
    label: 'Bird',
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/b343b192-5c51-4cec-af38-a497aefb6cb7.png?format=avif',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/af36081a-429f-4ed1-b9de-995f0576b4f4.png?format=avif',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-hero-clp.1704777035.235381.png?format=avif',
  },
  {
    label: 'Goč, Serbia',
    imgPath:'https://f.nooncdn.com/mpcms/EN0001/assets/50e3e023-e923-42c5-8c9e-9d76f7ed4283.png?format=avif',
  },


  {
    label: 'Goč, Serbia',
    imgPath:'https://f.nooncdn.com/mpcms/EN0001/assets/b343b192-5c51-4cec-af38-a497aefb6cb7.png?format=avif',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 60,
          pl: 2,
          bgcolor: 'background.default',
          marginBottom:'2px',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  minWidth: '30%',
                  overflowX:'hidden',

                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
           {/* Back  */}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;