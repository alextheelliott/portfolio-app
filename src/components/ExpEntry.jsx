import { YouTube } from '@mui/icons-material';
import { Link, Stack, Typography } from '@mui/material';

export function ExpEntry({children, data}) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent='space-between' alignItems='flex-end'>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight="fontWeightBold" variant="h6" gutterBottom>
            { data.link === '' ? data.company : 
              data.link.includes("youtu") ? 
                <Stack direction='row' spacing={1} alignItems={'center'}>
                  <YouTube/>
                  <Link style={{marginLeft: 2}} href={data.link} color="inherit">{data.company}</Link> 
                </Stack>
              :
                <Link href={data.link} color="inherit">{data.company}</Link> 
            }
          </Typography>
          <Typography variant="h6" gutterBottom>-</Typography>
          <Typography variant="h6" gutterBottom>{data.role}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1" gutterBottom>{data.date[0]}</Typography>
          <Typography variant="subtitle1" gutterBottom>-</Typography>
          <Typography variant="subtitle1" gutterBottom>{data.date[1]}</Typography>
        </Stack>
      </Stack>
      { data.desc.length > 0 &&
        data.desc.map((text, index) => 
          <Typography key={index} variant="body1">{text}</Typography>
        )
      }
      { data.keySkills.length > 0 &&
        <Stack direction="row" spacing={1}>
          <Typography sx={{ minWidth: '80px' }} fontWeight="fontWeightBold">Key Skills:</Typography>
          <Typography>{data.keySkills.join(', ')}</Typography>
        </Stack>
      }
      { children }
    </Stack>
  )
}