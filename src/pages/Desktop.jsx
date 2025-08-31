import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import AnchorNavigation from '../components/AnchorNavigation';
import Header from '../components/Header';
import { ExpEntry } from '../components/ExpEntry';
import { ProjectEntry } from '../components/ProjectEntry';

import resume from "../resources/Resume 10_07_2025 - Google Docs.pdf";
import headshot from "../resources/Elliott_Alex.png";
import engine1 from "../resources/engine1.png";
import engine2 from "../resources/engine2.gif";
import robocan1 from "../resources/robocan1.JPG";
import robocan2 from "../resources/robocan2.png";
import sunnyview1 from "../resources/sunnyview1.png";
import sunnyview2 from "../resources/sunnyview2.png";
import sunnyview3 from "../resources/sunnyview3.png";
import magna from "../resources/magna.webp";
import amegroup from "../resources/amegroup.png";
import lra3d from "../resources/lrad3d.png";
import { aboutMe, experience, projects } from '../resources/text';

export function DesktopLayout({sections}) {
  // Helper component for creating dummy content sections
  const ContentSection = ({ id, title, children, border }) => (
    <Box id={id} sx={{ minHeight: '50vh', maxWidth: '70ch', pt: 8, pb: 8, borderBottom: border?'1px solid #eee':'' }}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );

  const ContentSectionWImg = ({ id, title, img, children }) => (
    <Stack spacing={2} style={{borderBottom: '1px solid #eee'}}>
      <Stack direction="row" spacing={2}>
        <Box id={id} sx={{ minHeight: '50vh', maxWidth: '70ch', pt: 8 }}>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          {children}
        </Box>
        <img src={img} alt={'Portrait'} style={{width: 250, paddingTop: 64, objectFit: 'cover'}}/>
      </Stack>
      <Grid container spacing={2} style={{paddingBottom: 64}}>
        <Grid size={4}>
          <img src={magna} alt={'Magna Logo'} style={{height: 40, width: '100%', objectFit: 'contain'}}/>
        </Grid>
        <Grid size={4}>
          <img src={amegroup} alt={'AME Logo'} style={{height: 40, width: '100%', objectFit: 'contain'}}/>
        </Grid>
        <Grid size={4}>
          <img src={lra3d} alt={'LRA3D Logo'} style={{height: 40, width: '100%', objectFit: 'contain'}}/>
        </Grid>
      </Grid>
    </Stack>
  );

  return (
    <div style={{backgroundColor: 'background.default', minWidth: '900px'}}>
      <Header isMobile={false}/>
      <main>
        <AnchorNavigation sections={sections}/>
        <Container maxWidth="md">
          <Box sx={{ ml: '60px', mr: '60px' }}> {/* Add left margin to avoid content overlapping with the nav */}
            <ContentSectionWImg id="abt" title="About Me" img={headshot}>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1" sx={{ maxWidth: '70ch' }}>{aboutMe}</Typography>
              </Stack>
            </ContentSectionWImg>
            <ContentSection id="prj" title="Projects" border={true}>
              <Stack spacing={2}>
                <ProjectEntry data={projects.robocan}>
                  <Grid container spacing={2}>
                    <Grid size={8}>
                      <img src={robocan2} alt={'robocan2'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                    </Grid>
                    <Grid size={4}>
                      <img src={robocan1} alt={'robocan1'} style={{height: 250, width: '100%', objectFit: 'cover'}}/>
                    </Grid>
                  </Grid>
                </ProjectEntry>
                <ProjectEntry data={projects.sunnyview}>
                  <Grid container spacing={2}>
                    <Grid size={7}>
                      <img src={sunnyview2} alt={'sunnyview2'} style={{height: 340, width: '100%', objectFit: 'cover'}}/>
                    </Grid>
                    <Grid size={5}>
                      <Stack spacing={2}>
                        <img src={sunnyview3} alt={'sunnyview3'} style={{height: 110, width: '100%', objectFit: 'cover'}}/>
                        <img src={sunnyview1} alt={'sunnyview1'} style={{height: 214, width: '100%', objectFit: 'cover'}}/>
                      </Stack>
                    </Grid>
                  </Grid>
                </ProjectEntry>
                <ProjectEntry data={projects.i6engine}>
                  <Grid container spacing={2}>
                    <Grid size={4}>
                      <img src={engine1} alt={'engine1'} style={{height: 300, width: '100%', objectFit: 'cover'}}/>
                    </Grid>
                    <Grid size={8}>
                      <img src={engine2} alt={'engine2'} style={{height: 300, width: '100%', objectFit: 'cover'}}/>
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
                <ExpEntry data={experience.frc}/>
              </Stack>
            </ContentSection>
            <ContentSection id="res" title="Resume">
              <div style={{width: '100%', height: '500px'}}>
                <iframe src={resume} title='resume' width={'100%'} height={500} style={{border: 'none'}}></iframe>
              </div>
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