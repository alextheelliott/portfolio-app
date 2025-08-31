import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

import Header from '../components/Header';

import { aboutMe } from '../text';

export function MobileLayout({sections}) {
  const ContentSection = ({ id, title, children, border }) => (
    <Box id={id} sx={{ minHeight: '50vh', maxWidth: '70ch', pt: 8, pb: 8, borderBottom: border?'1px solid #eee':'' }}>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );

  return (
    <div style={{backgroundColor: 'background.default'}}>
      <Header isMobile={true}/>
      <main>
        <Container maxWidth="sm">
          <ContentSection id="abt" title="About Me">
            <Stack spacing={2}>
              <Typography variant="body1" sx={{ maxWidth: '70ch' }}>{aboutMe}</Typography>
              <img src='/resources/Elliott_Alex.png' alt={'Portrait'} style={{objectFit: 'cover'}}/>
            </Stack>
          </ContentSection>
          <ContentSection id="res" title="Resume">
            <div style={{width: '100%', height: '500px'}}>
              <iframe src='/Resume 10_07_2025 - Google Docs.pdf' title='resume' width={'100%'} height={500} style={{border: 'none'}}></iframe>
            </div>
          </ContentSection>
          <ContentSection id="exp" title="Experience">
            <Typography variant="body1" sx={{ maxWidth: '70ch' }}>
              To see more about my projects and experience visit this site on desktop!
            </Typography>
          </ContentSection>
        </Container>
        <footer style={{height: 'fit-content'}}>
          <div style={{width: '100%', height: '100%', paddingBlock: '10px', alignContent: 'center', color: '#fff', backgroundColor: '#00004e'}}>
            <Stack alignItems={'center'}>
              <Typography variant="body2">AlexJaElliott@gmail.com</Typography>
              <Typography variant="body2">+1 (647) 201-9466</Typography>
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