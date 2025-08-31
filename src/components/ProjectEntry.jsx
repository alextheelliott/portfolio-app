import { Link, Stack, Typography } from '@mui/material';

export function ProjectEntry({children, data}) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent='space-between' alignItems='flex-end'>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight="fontWeightBold" variant="h6" gutterBottom>
            { data.link === '' ? data.project : <Link href={data.link} color="inherit">{data.project}</Link> }
          </Typography>
          { data.extra !== '' &&
            <>
              <Typography variant="h6" gutterBottom>-</Typography>
              <Typography variant="h6" gutterBottom>{data.extra}</Typography>
            </>
          }
        </Stack>
        { data.date.length > 0 &&
          <Stack direction="row" spacing={1}>
            <Typography variant="subtitle1" gutterBottom>{data.date[0]}</Typography>
            { data.date.length > 1 &&
              <>
                <Typography variant="subtitle1" gutterBottom>-</Typography>
                <Typography variant="subtitle1" gutterBottom>{data.date[1]}</Typography>
              </>
            }
          </Stack>
        }
      </Stack>
      {
        data.desc.map((text) => 
          <Typography>{text}</Typography>
        )
      }
      { children }
    </Stack>
  )
}