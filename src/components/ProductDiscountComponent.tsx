import { Box, Typography } from '@mui/material';
import { AboveCountDiscount } from '../model/catalog';
import textMessages from '../shared/TextMessages';

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
          {textMessages.discount}:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {props.aboveCountDiscount.price} {textMessages.newShekel}{' '}
          {textMessages.buyingAbove} {props.aboveCountDiscount.count}{' '}
          {textMessages.items}
        </Typography>
      </Box>
    );
  }
  return <></>;
}
