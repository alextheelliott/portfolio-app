import { useState } from 'react';

import { Box, Card, Container, Divider, Grid, Link, Stack, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import GlareHover from '../bits/GlareHover/GlareHover';

import AnchorNavigation from '../components/AnchorNavigation';
import Header from '../components/Header';
import { ExpEntry } from '../components/ExpEntry';
import { ProjectEntry } from '../components/ProjectEntry';

import { aboutMe1, aboutMe2, experience, projects } from '../text';

export function DesktopLayout({sections}) {
  // Helper component for creating dummy content sections
  const ContentSection = ({ id, title, children, border }) => (
    <Box id={id} sx={{ minHeight: '50vh', width: '100%', pt: 8, pb: 8, borderBottom: border?'1px solid #eee':'' }}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );

  const ContentSectionWImg = ({ id, title, img, children }) => (
    <Stack spacing={2} style={{borderBottom: '1px solid #eee'}}>
      <Stack direction="row" spacing={2}>
        <Box id={id} sx={{maxWidth: '70ch', pt: 8 }}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          {children}
        </Box>
        <GlareCard style={{alignContent: 'center', width: 300, height: 350, marginTop: 64}}>
          <img src={img} alt={'Portrait'} style={{transform: 'translate(-10px)', zIndex: 1, height: 350, objectFit: 'cover'}}/>
        </GlareCard>
      </Stack>
      <Grid container spacing={2} style={{paddingBottom: 64}}>
        <Grid size={4}>
          <GlareCard style={{alignContent: 'center', height: 75}}>
            <img src="/resources/magna.webp" alt={'Magna Logo'} style={{height: 40, width: '100%', objectFit: 'contain'}}/>
          </GlareCard>
        </Grid>
        <Grid size={4}>
          <GlareCard style={{alignContent: 'center', height: 75}}>
            <img src="/resources/amegroup.png" alt={'AME Logo'} style={{height: 40, marginTop: 10, width: '100%', objectFit: 'contain'}}/>
          </GlareCard>
        </Grid>
        <Grid size={4}>
          <GlareCard style={{alignContent: 'center', height: 75}}>
            <img src="/resources/lrad3d.png" alt={'LRA3D Logo'} style={{height: 40, width: '100%', objectFit: 'contain'}}/>
          </GlareCard>
        </Grid>
      </Grid>
    </Stack>
  );

  const GlareCard = ({children, style}) => (
    <Card className='zoom' style={{...style, backgroundColor: '#eeeeee'}}>
      <GlareHover glareColor={'#ffffff'} glareSize={350} playOnce={true} transitionDuration={1200} background='#00000000' height='100%' width='100%'>
        {children}
      </GlareHover>
    </Card>
  );

  const [resumeShown, setResumeShown] = useState("robotics");

  const handleResumeChange = (event, newResume) => {
    if (newResume !== null) setResumeShown(newResume);
  }

  return (
    <div style={{backgroundColor: 'background.default', minWidth: '900px'}}>
      <style>
        {`.zoom {
          transition: transform .2s; /* Animation */
        }
        .zoom:hover {
          transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }`}
      </style>
      <Header isMobile={false}/>
      <main>
        <AnchorNavigation sections={sections}/>
        <Container maxWidth="md">
          <Box sx={{ ml: '30px', mr: '30px' }}> {/* Add left margin to avoid content overlapping with the nav */}
            <ContentSectionWImg id="abt" title="About Me" img="/resources/Elliott_Alex.png">
              <Stack direction="column" spacing={2}>
                <Typography variant="body1" sx={{ maxWidth: '70ch' }}>{aboutMe1}</Typography>
                <Typography variant="body1" sx={{ maxWidth: '70ch' }}>{aboutMe2}</Typography>
              </Stack>
            </ContentSectionWImg>
            <ContentSection id="prj" title="Projects" border={true}>
              <Stack spacing={2}>
                <ProjectEntry data={projects.capstone}>
                  <Stack spacing={2}>
                    <Grid container spacing={2}>
                      <Grid size={4} style={{zIndex: 3}}>
                        <GlareCard style={{alignContent: 'center', height: 350}}>
                          <img src="../resources/capstone2.gif" alt={'capstone2'} style={{height: 350, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Grid>
                      <Grid size={8} style={{zIndex: 4}}>
                        <GlareCard style={{alignContent: 'center', height: 350}}>
                          <img src="/resources/capstone1.jpeg" alt={'capstone1'} style={{height: 350, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid size={6} style={{zIndex: 2}}>
                        <GlareCard style={{alignContent: 'center', height: 260}}>
                          <img src="/resources/capstone4.png" alt={'capstone4'} style={{height: 260, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Grid>
                      <Grid size={6} style={{zIndex: 1}}>
                        <GlareCard style={{alignContent: 'center', height: 260}}>
                          <img src="/resources/capstone3.jpg" alt={'capstone3'} style={{height: 260, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Grid>
                    </Grid>
                  </Stack>
                </ProjectEntry>
                <ProjectEntry data={projects.spiceChanger}>
                  <Grid container spacing={2}>
                    <Grid size={8} style={{zIndex: 4}}>
                      <Card style={{height: '100%'}}>
                        <iframe 
                          src="https://www.youtube.com/embed/DZng8hrZx-s" 
                          frameborder="0" allow="fullscreen;" title="Spice Changer Demo Video"
                          style={{height: '100%', width: '100%', objectFit: 'cover'}}
                        />
                      </Card>
                    </Grid>
                    <Grid size={4} style={{zIndex: 3}}>
                      <Stack spacing={2}>
                        <GlareCard style={{alignContent: 'center', height: 250}}>
                          <img src="/resources/sc3.png" alt={'spiceChanger2'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                        <GlareCard style={{alignContent: 'center', height: 250}}>
                          <img src="/resources/sc4.png" alt={'spiceChanger1'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Stack>
                    </Grid>
                  </Grid>
                </ProjectEntry>
                <ProjectEntry data={projects.robocan}>
                  <Grid container spacing={2}>
                    <Grid size={8} style={{zIndex: 4}}>
                      <GlareCard style={{alignContent: 'center', height: 250}}>
                        <img src="/resources/robocan2.png" alt={'robocan2'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                      </GlareCard>
                    </Grid>
                    <Grid size={4} style={{zIndex: 3}}>
                      <GlareCard style={{alignContent: 'center', height: 250}}>
                        <img src="/resources/robocan1.JPG" alt={'robocan1'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                      </GlareCard>
                    </Grid>
                  </Grid>
                </ProjectEntry>
                <ProjectEntry data={projects.sunnyview}>
                  <Grid container spacing={2}>
                    <Grid size={7} style={{zIndex: 4}}>
                      <GlareCard style={{alignContent: 'center', height: 340}}>
                        <img src="/resources/sunnyview2.png" alt={'sunnyview2'} style={{height: 340, width: '100%', objectFit: 'cover'}}/>
                      </GlareCard>
                    </Grid>
                    <Grid size={5}>
                      <Stack spacing={2}>
                        <GlareCard style={{alignContent: 'center', height: 110}}>
                          <img src="/resources/sunnyview3.png" alt={'sunnyview3'} style={{height: 110, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                        <GlareCard style={{alignContent: 'center', height: 214}}>
                          <img src="/resources/sunnyview1.png" alt={'sunnyview1'} style={{height: 214, width: '100%', objectFit: 'cover'}}/>
                        </GlareCard>
                      </Stack>
                    </Grid>
                  </Grid>
                </ProjectEntry>
                <ProjectEntry data={projects.i6engine}>
                  <Grid container spacing={2}>
                    <Grid size={4}>
                      <GlareCard style={{alignContent: 'center', height: 300}}>
                        <img src="../resources/engine1.png" alt={'engine1'} style={{height: 300, width: '100%', objectFit: 'cover'}}/>
                      </GlareCard>
                    </Grid>
                    <Grid size={8}>
                      <GlareCard style={{alignContent: 'center', height: 300}}>
                        <img src="../resources/engine2.gif" alt={'engine2'} style={{height: 300, width: '100%', objectFit: 'cover'}}/>
                      </GlareCard>
                    </Grid>
                  </Grid>
                </ProjectEntry>
              </Stack>
            </ContentSection>
            <ContentSection id="exp" title="Experience" border={true}>
              <Stack spacing={2}>
                <ExpEntry data={experience.magna}/>
                <ExpEntry data={experience.ame2}/>
                <ExpEntry data={experience.ame1}/>
                <ExpEntry data={experience.lra3d}/>
              </Stack>
            </ContentSection>
            <ContentSection id="tea" title="Teams" border={true}>
              <Stack spacing={2}>
                <ExpEntry data={experience.fe}/>
                <ExpEntry data={experience.uas}/>
                <ExpEntry data={experience.frc}>
                  <Grid container spacing={2}>
                    <Grid size={4}>
                      <GlareCard style={{position: 'relative', alignContent: 'center', height: 260}}>
                        <img src="/resources/frc1.png" alt={'frc1'} style={{height: 260, width: '100%', objectFit: 'cover'}}/>
                        <Card style={{backgroundColor: '#eeeeeed5', position: 'absolute', 
                          bottom: 8}}>
                          <Typography variant="body1" fontWeight="bold" style={{marginBlock: 4, marginInline: 20}}>2018 - Rex</Typography>
                        </Card>
                      </GlareCard>
                    </Grid>
                    <Grid size={4}>
                      <GlareCard style={{position: 'relative', alignContent: 'center', height: 260}}>
                        <img src="/resources/frc2.png" alt={'frc2'} style={{height: 260, width: '100%', objectFit: 'cover'}}/>
                        <Card style={{backgroundColor: '#eeeeeed5', position: 'absolute', 
                          top: 8}}>
                          <Typography variant="body1" fontWeight="bold" style={{marginBlock: 4, marginInline: 20}}>2019 - Mantis</Typography>
                        </Card>
                      </GlareCard>
                    </Grid>
                    <Grid size={4}>
                      <GlareCard style={{position: 'relative', alignContent: 'center', height: 260}}>
                        <img src="/resources/frc3.png" alt={'frc3'} style={{height: 260, width: '100%', objectFit: 'cover'}}/>
                        <Card style={{backgroundColor: '#eeeeeed5', position: 'absolute', 
                          bottom: 8}}>
                          <Typography variant="body1" fontWeight="bold" style={{marginBlock: 4, marginInline: 20}}>2020 - Megalodon</Typography>
                        </Card>
                      </GlareCard>
                    </Grid>
                  </Grid>
                </ExpEntry>
              </Stack>
            </ContentSection>
            <ContentSection id="res" title="Resume">
              <Stack spacing={2}>
                <Box display="flex" justifyContent="center" style={{width: '100%', }}>
                  <ToggleButtonGroup
                    value={resumeShown}
                    exclusive
                    onChange={handleResumeChange}
                    style={{}}
                  >
                    <ToggleButton value='mechanical'>Mechanical</ToggleButton>
                    <ToggleButton value='robotics'>Robotics</ToggleButton>
                    <ToggleButton value='software'>Software</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <div style={{width: '100%', height: '500px'}}>
                  <iframe 
                    src={resumeShown === 'mechanical' ? '/Resume Mechanical.pdf' : resumeShown === 'robotics' ? '/Resume Robotics.pdf' : '/Resume Software.pdf'}
                    title='resume' width={'100%'} height={500} style={{border: 'none'}}
                  ></iframe>
                </div>
              </Stack>
            </ContentSection>
          </Box>
        </Container>
        <footer style={{height: 48}}>
          <div style={{width: '100%', height: '100%', alignContent: 'center', color: '#fff', backgroundColor: '#00004e'}}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: "#fff" }}/>}
              spacing={2}
              justifyContent={'center'}
            >
              <Typography variant="body2">AlexJaElliott@gmail.com</Typography>
              <Typography variant="body2">+1 (647) 201-9466</Typography>
              <Typography variant="body2">alexjelliott.ca</Typography>
              <Stack direction='row' spacing={1} alignItems={'center'}>
                <GitHub fontSize='body2'/>
                <Typography variant="body2">
                  <Link href={'https://github.com/alextheelliott'} color="inherit">github.com/alextheelliott</Link>
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1} alignItems={'center'}>
                <LinkedIn fontSize='body2' style={{marginRight: 4}}/>
                <Typography variant="body2">
                  <Link href={'https://linkedin.com/in/alexjaelliott'} color="inherit">linkedin.com/in/alexjaelliott</Link>
                </Typography>
              </Stack>
            </Stack>
          </div>
        </footer>
      </main>
    </div>
  )
}