import { Box, Button, Radio, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SizeOption } from '../model/catalog';

export interface ProductSizePickerComponentProps {
  sizes: SizeOption[];
  selectedSizeLabel: (label: string) => void;
}

export default function ProductSizePickerComponent(
  props: ProductSizePickerComponentProps
) {
  const [selectedSizeLabel, setSelectedSizeLabel] = useState<string>();

  const [selectedSizeDisplayName, setSelectedSizeDisplayName] =
    useState<string>('יש לבחור מידה');

  useEffect(() => {
    if (selectedSizeLabel) {
      const size = props.sizes.find((s) => s.value === selectedSizeLabel);
      if (size) {
        setSelectedSizeDisplayName(size.displayText);
      }
      props.selectedSizeLabel(selectedSizeLabel);
    }
  }, [selectedSizeLabel]);
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    setSelectedSizeLabel(label);
  };

  const sizePickerControlProps = (item: string) => ({
    checked: selectedSizeLabel === item,
    onChange: handleSizeChange,
    value: item,
  });

  return (
    <>
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 'bold', marginRight: '5px' }}
          display="inline"
        >
          מידה:
        </Typography>

        <Typography variant="body2" color="text.secondary" display="inline">
          {selectedSizeDisplayName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {props.sizes.map((size) => (
          <Radio
            key={size.value}
            {...sizePickerControlProps(size.value)}
            icon={
              <Button size="small" variant="outlined">
                {size.displayText}
              </Button>
            }
            checkedIcon={
              <Button size="small" variant="contained">
                {size.displayText}
              </Button>
            }
          />
        ))}
      </Box>
    </>
  );
}
