import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import textMessages from '../shared/TextMessages';

export interface ProductCountPickerComponentProps {
  selectedCount: (count: number) => void;
}

export default function ProductCountPickerComponent(
  props: ProductCountPickerComponentProps
) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    props.selectedCount(count);
  }, [count]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: 'bold', marginRight: '5px' }}
            variant="body2"
            color="text.secondary"
            display="inline"
          >
            {textMessages.count}:
          </Typography>

          <Typography
            sx={{ marginRight: '10px' }}
            variant="h6"
            color="text.secondary"
            display="inline"
          >
            {count}
          </Typography>
        </Box>

        <ButtonGroup>
          <Button
            size="small"
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
          <Button
            size="small"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
