import { Box, Button, Radio } from '@mui/material';
import { useEffect, useState } from 'react';
import { Leg, LegPickerOption } from '../model/catalog';

export interface LegPickerComponentProps {
  options: LegPickerOption[];
  selectedLeg: (leg: Leg) => void;
}

export default function LegPickerComponent(props: LegPickerComponentProps) {
  const [selectedLegLabel, setSelectedLegLabel] = useState<Leg>();

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
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
    </Box>
  );
}
