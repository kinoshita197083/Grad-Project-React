import React, { useEffect, useRef } from 'react'
import HeroSection from '../HeroSection';
import './home.css'
// import { MpxInfoSlider } from '../MpxInfoSlider/MpxInfoSlider'
// import { ArticleLayout } from '../../article_layout';
import { HomeSectionIntro } from '../HomeSectionIntro';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { HomeSection } from '../home_section';
import { HomeTitleScroll } from '../home_title_scroll/home_title_scroll';
import { MonkeypoxPage } from './monkeypox_page/monkeypox_page';
import HorizontalDashboard from '../horizontal_dashboard/horizontal_dashboard';
import { MpxInfoSlider } from '../MpxInfoSlider/MpxInfoSlider';
// import { ArticleSection } from '../article_section/article_section';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const disclaimer = () => {
        if (localStorage.getItem('popState') !== 'shown') {
            handleClickOpen();
            localStorage.setItem('popState', 'shown')
        }
    };

    useEffect(() => {
        disclaimer();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='home-container'>
            {/* <HeroSection /> */}
            <MonkeypoxPage />
            <HorizontalDashboard />
            {/* <div style={{ height: '3rem' }} />
            <MpxInfoSlider /> */}


            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Use CharmingApe's service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            The claims and statements made on this website are inferred by reputable and data driven sources which
                            will be mentioned throughout the site for more information. By no means are these recommendations or suggestions
                            to be taken as medical advice on this website.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleClose}>Disagree</Button> */}
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div ref={ref} />
            <HomeTitleScroll />
            <MpxInfoSlider />
            <HomeSection />
            {/* <button onClick={handleScroll}>Scroll</button> */}
            {/* <div class="arrow-wrap" onClick={handleScroll}>
                <span class="arrow"></span>
            </div> */}

            {/* <div ref={ref} /> */}
            {/* <HomeSectionIntro /> */}
            {/* <ArticleSection /> */}
        </div>
    );
}
export default Home;