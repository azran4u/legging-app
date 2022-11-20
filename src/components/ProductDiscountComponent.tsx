import { Box, Typography } from '@mui/material';
import { AboveCountDiscount } from '../model/catalog';

export interface ProductDiscountComponentProps {
  aboveCountDiscount?: AboveCountDiscount;
}

export default function ProductDiscountComponent(
  props: ProductDiscountComponentProps
) {
  if (props.aboveCountDiscount) {
    return (
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 'bold', marginRight: '5px' }}
          display="inline"
        >
          מבצע:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {props.aboveCountDiscount.price} ש"ח בקנייה מעל{' '}
          {props.aboveCountDiscount.count} פריטים
        </Typography>
      </Box>
    );
  }
  return <></>;
}
