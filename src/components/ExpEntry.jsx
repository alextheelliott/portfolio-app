import { Link, Stack, Typography } from '@mui/material';

export function ExpEntry({data}) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent='space-between' alignItems='flex-end'>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight="fontWeightBold" variant="h6" gutterBottom>
            { data.link === '' ? data.company : <Link href={data.link} color="inherit">{data.company}</Link> }
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
      {
        data.desc.map((text) => <Typography variant="body1">{text}</Typography>)
      }
    </Stack>
  )
}