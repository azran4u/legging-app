import { Box } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoComponent from '../components/Logos/LogoComponent';

export default {
  title: 'Logos/LogoComponent',
  component: LogoComponent,
} as ComponentMeta<typeof LogoComponent>;

export const Primary: ComponentStory<typeof LogoComponent> = () => (
  <Box sx={{ width: '50px', height: '50px' }}>
    <LogoComponent />
  </Box>
);
