import { Box, Button, Radio, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Leg, LegPickerOption } from '../model/catalog';
import textMessages from '../shared/TextMessages';

export interface ProductLegPickerComponentProps {
  options: LegPickerOption[];
  selectedLeg: (leg: Leg) => void;
}

export default function ProductLegPickerComponent(
  props: ProductLegPickerComponentProps
) {
  const [selectedLegLabel, setSelectedLegLabel] = useState<Leg>('noLeg');

  useEffect(() => {
    if (selectedLegLabel) props.selectedLeg(selectedLegLabel);
  }, [selectedLegLabel]);

  const handleLegChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.value as Leg;
    setSelectedLegLabel(label);
  };

  const legPickerControlProps = (item: string) => ({
    checked: selectedLegLabel === item,
    onChange: handleLegChange,
    value: item,
  });

  return (
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontWeight: 'bold', marginRight: '5px' }}
        display="inline"
      >
        {textMessages.leg}:
      </Typography>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      > */}
      {props.options.map((leg) => (
        <Radio
          key={leg.label}
          {...legPickerControlProps(leg.label)}
          icon={
            <Button size="small" variant="outlined">
              {leg.displayName}
            </Button>
          }
          checkedIcon={
            <Button size="small" variant="contained">
              {leg.displayName}
            </Button>
          }
        />
      ))}
      {/* </Box> */}
    </Box>
  );
}
