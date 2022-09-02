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
import Link from '@mui/material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ReactDOM from 'react-dom/client';
import './flip.sass'


const steps = ['Avoidance', 'Working safe', 'When infected'];
const labels = ['Best practice!', 'Keeping your working environment clean!', "Things to consider when infected!"]

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

    const [alignment, setBackground] = React.useState('hair');
    const handleBackground = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setBackground(newAlignment)
        changeState(newAlignment);
    };

    function changeState(value) {
        let container = document.getElementById('intLocation')
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let root = ReactDOM.createRoot(container)
        if (value === 'hair') {
            root.render(
                <React.Fragment>
                    <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(1).jpg" height="100%" width="100%" />
                    <Tooltip title={<Typography fontSize={15}>
                        Dispose of used linens or thoroughly sanitise them before their next use. If possible use disposables!
                    </Typography>} placement="bottom">
                        <div className="child focus disposable"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        Close off areas which have been exposed by infected individuals until appropriately sterilised
                    </Typography>} placement="bottom">
                        <div className="child focus sanitise"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        Sanitise common areas and surfaces with medically approved products between each use
                    </Typography>} placement="bottom">
                        <div className="child focus commonarea"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        Keep your area well ventilated
                    </Typography>} placement="right">
                        <div className="child focus ventilation"></div>
                    </Tooltip>
                </React.Fragment>
            )
        } else if (value === 'tattoo') {
            root.render(
                <React.Fragment>
                    <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(4).png' height='100%' width='100%' />
                    <Tooltip title={<Typography fontSize={15}>
                        Wear a mask and gloves to when working with clients to prevent skin-to-skin contact and respiratory exposure.
                        Ensure to change your gloves between each client
                    </Typography>} placement="left">
                        <div className="child focus ppe"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        Sanitise common areas between each use with medically approved cleaning products (usually alcohol based)
                    </Typography>} placement="top">
                        <div className="child focus chair"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        If hair removal is required for a client, ensure they perform this action at home prior to the appointment
                    </Typography>} placement="left">
                        <div className="child focus hair"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        Sterilise all equipment thoroughly with a high alcohol disinfectant between customers, especially if equipment
                        is being used on the skin. If possible use disposables!
                    </Typography>} placement="top">
                        <div className="child focus equipment"></div>
                    </Tooltip>
                </React.Fragment>
            )
        } else if (value === 'spa') {
            root.render(
                <React.Fragment>
                    <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(3).png' height='100%' width='100%' />
                    <Tooltip title={<Typography fontSize={15}>
                        Wear a mask and gloves to when working with clients to prevent skin-to-skin contact and respiratory exposure.
                        Ensure to change your gloves between each client
                    </Typography>} placement="left">
                        <div className="child focus contact"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        When using oils or liquids with the client, only use a specific portion to avoid cross contaminating the source container
                    </Typography>} placement="left">
                        <div className="child focus oils"></div>
                    </Tooltip>
                    <Tooltip title={<Typography fontSize={15}>
                        If clients are intending to sit for long periods, disposable plastic sheets may be a good
                        implementation for where they intend to sit
                    </Typography>} placement="top">
                        <div className="child focus chairs"></div>
                    </Tooltip>
                </React.Fragment>
            )
        } else {
            container.innerHTML = 'Select an environment above'
        }
    };

    return (
        <div className='stepper-container'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 0.5, pb: 0 }}>
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
                            <Typography sx={{ mt: 2, mb: 1, pt: 1 }}>
                                <h1>{labels[activeStep]}</h1>
                            </Typography>
                            <div>
                                {activeStep < 1 ? (
                                    <div className='p-container'>
                                        <div className='parent'>
                                            <Grid container direction="row" spacing={{ xs: 2, md: 3 }} alignItems='center'>
                                                <Grid item xs={4}>
                                                    <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
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
                                                <Grid item xs={4}>
                                                    <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
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
                                                    <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
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
                                        <p class='p-text'>
                                            These avoidance precautions were inferred from protocols advised from the CDC for personal protection and known methods of infection transfer.
                                            For more information on the CDC's recommendations <Link href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">click here</Link>.
                                        </p>
                                    </div>
                                ) : activeStep === 1 ? (
                                    <div className='p-container'>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={alignment}
                                            exclusive
                                            onChange={handleBackground}
                                            aria-label="Platform"
                                        >
                                            <ToggleButton value="hair">Hair Salons</ToggleButton>
                                            <ToggleButton value="tattoo">Tattoo Studios</ToggleButton>
                                            <ToggleButton value="spa">Spa Salons</ToggleButton>
                                        </ToggleButtonGroup>
                                        <div className="parent" id='intLocation'>
                                            <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(1).jpg" height="100%" width="100%" />
                                            <Tooltip title={<Typography fontSize={15}>
                                                Dispose of used linens or thoroughly sanitise them before their next use. If possible use disposables!
                                            </Typography>} placement="bottom">
                                                <div className="child focus disposable"></div>
                                            </Tooltip>
                                            <Tooltip title={<Typography fontSize={15}>
                                                Close off areas which have been exposed by infected individuals until appropriately sterilised
                                            </Typography>} placement="bottom">
                                                <div className="child focus sanitise"></div>
                                            </Tooltip>
                                            <Tooltip title={<Typography fontSize={15}>
                                                Sanitise common areas and surfaces with medically approved products between each use
                                            </Typography>} placement="bottom">
                                                <div className="child focus commonarea"></div>
                                            </Tooltip>
                                            <Tooltip title={<Typography fontSize={15}>
                                                Keep your area well ventilated
                                            </Typography>} placement="right">
                                                <div className="child focus ventilation"></div>
                                            </Tooltip>
                                        </div>
                                        <p class='p-text'>
                                            These work precautions were inferred from protocols advised from the CDC for personal protection and known methods of infection transfer.
                                            <br></br>
                                            Explore below good practices to include in your work environment to reduce infectious risks! For more information on the CDC's recommendations <Link href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">click here</Link>.
                                        </p>
                                    </div>
                                ) : (
                                    <div className='p-container'>
                                        <div>
                                            <Grid container direction="row" spacing={{ xs: 2, md: 3 }} alignItems='center'>
                                                <Grid item xs={4}>
                                                    {/* <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
                                                            <CardMedia
                                                                component="img"
                                                                height="300"
                                                                image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image.png"
                                                                alt="Cover yourself"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    Cover Infected areas!
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    Cover infected skin where possible with bandages or clothing to prevent direct contact with your surroundings.
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card> */}
                                                    <div className='card'>
                                                        <div className='card-front'></div>
                                                        <div className='card-back'>
                                                            <h2>Testing</h2>
                                                        </div>

                                                    </div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
                                                            <CardMedia
                                                                component="img"
                                                                height="300"
                                                                image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(2).png"
                                                                alt="Wear PPE"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    Use protection to protect others!
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    If your living or needing to interact closely with others, wear a medical grade mask and gloves to limit the chances of infecting others.
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Card sx={{ Width: '100%', height: '28rem' }}>
                                                        <CardActionArea sx={{ Width: '100%', height: '100%' }} href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">
                                                            <CardMedia
                                                                component="img"
                                                                height="300"
                                                                image="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(1).png"
                                                                alt="Sanitise"
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    Sanitise! Sanitise! Sanitise!
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    Sanitise your hands and all linen which you have used to prevent monkeypox from spreading via common items and surfaces!
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                            <p class='p-text'>
                                                When testing positive for Monkeypox, the Victorian government has stated you must immediately isolate until symptoms are no longer present! But in the event this is not possible or when living with others,
                                                these precautions should be considered!
                                                <br></br>
                                                <br></br>
                                                These precautions were inferred and advised from the Center of Disease and Control (<Link href='https://www.cdc.gov/poxvirus/monkeypox/clinicians/infection-control-home.html' target="_blank">click here</Link>) for personal protection and known methods of infection transfer
                                                and the Victorian government's department of health (<Link href='https://www.health.vic.gov.au/health-alerts/health-warning-on-monkeypox' target="_blank">click here</Link>.).
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Stepper nonLinear activeStep={activeStep}>
                                {steps.map((label, index) => (
                                    <Step key={label} completed={completed[index]}>
                                        <StepButton color="inherit" onClick={handleStep(index)}>
                                            {label}
                                        </StepButton>
                                    </Step>
                                ))}
                            </Stepper>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </div>
    );
}
