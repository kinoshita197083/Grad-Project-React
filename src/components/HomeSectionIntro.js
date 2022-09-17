import React, { Component } from 'react';
import { Link as Rlink } from 'react-router-dom';
import './HomeSectionIntro.css';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function HomeSectionIntro() {
    return (
        <section id="into">
            <div class="container">
                <div class="row">
                    {/* <div class="col-lg-12 text-center">
                        <h2 className="section-heading">What is Monkeypox?</h2>
                        <h3 className="aim" >
                            Monkeypox is a viral infection which belongs to the same family as Smallpox which has been known to have similar symptoms but deemed clinicaly less severe. Monkeypox made
                            its first appearance in 1970, originating from Central Africa with sparse cases. However, as of 2003, the <Link href='https://www.who.int/news-room/fact-sheets/detail/monkeypox' target='_blank'>WHO foundation</Link> has deemed Monkeypox a global outbreak with cases occuring
                            in USA. It wasn't until early 2022, that the virus has come to Australian borders, with its first case recorded in May 2022. Since then, cases have been on the rise nationally.
                        </h3>
                        <h2 className='sub-title'>How does this effect you?</h2>
                        <h3 className='aim'>
                            Globally, data shows that just over 98% of people infected by monkeypox were men aged between 20 to 69.
                            Upon inspecting the top 4 countries with cases, it was witnessed that majroity of these cases impacted people within the age range of 25 to 34.
                            In Australia espeically in New South Wales (NSW) and Victoria (VIC) there's been a rise in Monkeypox cases as transmission in communities have begun to spread espeically amongst males.
                            Monkeypox infections occur most commonly via skin-to-skin contact, which highly impacts those involved in the service industry whereby such activities are unavoidable!
                        </h3>
                    </div> */}
                </div>
                <h2 className='sub-title'>What you'll on this platform</h2>
                <div className='container'>
                <Grid container direction="row" spacing={{ xs: 2, md: 3}} alignItems='center'>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href='/Data'>
                                <CardMedia sx={{ padding: '2rem' }}>
                                    <i class="fa-solid fa-comment-medical icon fa-4x"></i>
                                </CardMedia>
                                <Typography class="service-heading">Awareness</Typography>
                                <Typography class="text-muted">
                                    Symptoms and indicators, know what to look out for when suspecting monkeypox
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href='/Stepper'>
                                <CardMedia sx={{ padding: '2rem' }}>
                                    <i class="fa-solid fa-pump-medical icon fa-4x"></i>
                                </CardMedia>
                                <Typography class="service-heading">Prevention</Typography>
                                <Typography class="text-muted">Basic guidelines for proper hygiene practices to reduce the risk of transmission</Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href='/Dashboard'>
                                <CardMedia sx={{ padding: '2rem' }}>
                                    <i class="fa-solid fa-chart-column icon fa-4x"></i>
                                </CardMedia>
                                <Typography class="service-heading">Data driven statistics</Typography>
                                <Typography class="text-muted">
                                    Data visualisations and statistics are driven by open data sourced from <Link className='icon' href='https://www.global.health' target='_blank'>Global.Health</Link>.
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            </div>
        </section >
    );
};