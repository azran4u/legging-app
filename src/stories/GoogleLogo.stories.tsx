import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoogleLogoComponent from '../components/Logos/GoogleLogoComponent';

export default {
  title: 'Logos/GoogleLogoComponent',
  component: GoogleLogoComponent,
} as ComponentMeta<typeof GoogleLogoComponent>;

export const Primary: ComponentStory<typeof GoogleLogoComponent> = () => (
  <GoogleLogoComponent />
);
