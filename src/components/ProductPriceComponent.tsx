import { Box, Typography } from '@mui/material';

export interface ProductPriceComponentProps {
  price?: number;
}

export default function ProductPriceComponent(
  props: ProductPriceComponentProps
) {
  if (props.price) {
    return (
      <Box>
        {' '}
        <Typography
          variant="body2"
          color="text.secondary"
          display="inline"
          marginRight={'5px'}
          sx={{ fontWeight: 'bold' }}
        >
          מחיר ליחידה:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {props.price} ש"ח
        </Typography>
      </Box>
    );
  }
  return <></>;
}
