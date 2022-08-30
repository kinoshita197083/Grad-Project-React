import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './stepper.css'
import Tooltip from '@mui/material/Tooltip'

const steps = ['Avoidance', 'Working safe', 'Vaccination'];
const labels = ['Best practice!', 'Keep clean!', 'Boost your protection!']

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className='stepper-container'>
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }} className='complete p-container'>
                                All steps completed - you&apos;re good to go
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                <h1>{labels[activeStep]}</h1>
                            </Typography>
                            <div>
                                {activeStep < 1 ? (
                                    <div className='holder'>
                                        <Grid container direction="row" spacing={{ xs: 2, md: 3 }}>
                                            <Grid item xs={4}>
                                                <Card sx={{ maxWidth: '100%', height: '100%' }}>
                                                    <CardActionArea sx={{ maxWidth: '100%', height: '100%' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="300"
                                                            image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-thirdman-5961416.jpg"
                                                            alt="skin image"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                Avoid skin to skin contact!
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Monkey pox has been known to have the highest rate of infection via direct skin to skin contact with infected sections of skin!
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item item xs={4}>
                                                <Card sx={{ maxWidth: '100%', height: '100%' }}>
                                                    <CardActionArea sx={{ maxWidth: '100%', height: '100%' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="300"
                                                            image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-ylanite-koppens-934070.jpg"
                                                            alt="surface image"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                Avoid contaminated surfaces!
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Avoid touching surfaces which have been contacted by others who have Monkeypox! (i.e. clothing, towels)
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Card sx={{ maxWidth: '100%', height: '100%' }}>
                                                    <CardActionArea sx={{ maxWidth: '100%', height: '100%' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="300"
                                                            image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-daria-shevtsova-1458684.jpg"
                                                            alt="fluid image"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                Avoid fluid transfer!
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Monkeypox has the capability to infect others through fluid transfer! Espeically if exposed directly to the viral fluid!
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ) : activeStep === 1 ? (
                                    <div class="parent">
                                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(1).jpg' height='100%' width = '100%'/>
                                        <Tooltip title="Lesions: 59.11%" placement='bottom'>
                                            <div className="surfaces box towel"></div>
                                        </Tooltip>
                                    </div>
                                ) : (
                                    <div className='p-container'>
                                        <p>Hey step 3</p>
                                    </div>
                                )}
                            </div>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button> */}
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Finish'
                                                : 'Continue'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </div>
    );
}
