import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import textMessages from '../shared/TextMessages';

export interface AddToCartComponentProps {
  enabled: boolean;
  add: () => void;
}

export default function AddToCartComponent(props: AddToCartComponentProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        <Button
          disabled={!props.enabled}
          size="small"
          variant="contained"
          onClick={props.add}
        >
          {textMessages.addToCart}
          <ShoppingCartIcon />
        </Button>
      </Box>
    </>
  );
}
