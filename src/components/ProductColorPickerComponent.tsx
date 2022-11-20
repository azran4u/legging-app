import { Box, Radio, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ColorOption } from '../model/catalog';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

export interface ProductColorPickerComponentProps {
  colors: ColorOption[];
  selectedColorLabel: (label: string) => void;
}

export default function ProductColorPickerComponent(
  props: ProductColorPickerComponentProps
) {
  const [selectedColorDisplayName, setSelectedColorDisplayName] =
    useState<string>('יש לבחור צבע');

  const [selectedColorLabel, setSelectedColorLabel] = useState<string>();

  useEffect(() => {
    if (selectedColorLabel) {
      const color = props.colors.find((c) => c.value === selectedColorLabel);
      if (color) {
        setSelectedColorDisplayName(color.displayName!);
      }
      props.selectedColorLabel(selectedColorLabel);
    }
  }, [selectedColorLabel]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value;
    setSelectedColorLabel(label);
  };

  const colorPickerControlProps = (item: string) => ({
    checked: selectedColorLabel === item,
    onChange: handleColorChange,
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
          צבע:
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline">
          {selectedColorDisplayName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {props.colors.map((color) => (
          <Radio
            key={color.value}
            {...colorPickerControlProps(color.value)}
            icon={
              <CircleRoundedIcon
                sx={{
                  color: color.color,
                }}
              />
            }
            checkedIcon={
              <AdjustOutlinedIcon
                sx={{
                  color: color.color,
                }}
              />
            }
          />
        ))}
      </Box>
    </>
  );
}
