import { Box, Typography } from '@mui/material';

export interface ProductDescriptionComponentProps {
  description: string;
}

export default function ProductDescriptionComponent(
  props: ProductDescriptionComponentProps
) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'primary.light',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {props.description}
      </Typography>
    </Box>
  );
}
