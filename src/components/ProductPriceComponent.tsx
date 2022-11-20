import { Box, Typography } from '@mui/material';
import textMessages from '../shared/TextMessages';

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
          {textMessages.pricePerUnit}:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {props.price} {textMessages.newShekel}
        </Typography>
      </Box>
    );
  }
  return <></>;
}
