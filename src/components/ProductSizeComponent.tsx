import { Box, Typography } from '@mui/material';
import textMessages from '../shared/TextMessages';

export interface ProductSizeComponentProps {
  displayText?: string;
}

export default function ProductSizeComponent(props: ProductSizeComponentProps) {
  if (props?.displayText) {
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
          {textMessages.size}:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {props.displayText}
        </Typography>
      </Box>
    );
  }
  return <></>;
}
