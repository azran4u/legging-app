import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoutWithGoogleComponent from '../components/LogoutWithGoogleComponent';

export default {
  title: 'Login/LogoutWithGoogleComponent',
  component: LogoutWithGoogleComponent,
} as ComponentMeta<typeof LogoutWithGoogleComponent>;

export const Primary: ComponentStory<typeof LogoutWithGoogleComponent> = () => (
  <LogoutWithGoogleComponent logout={() => console.log('logout')} />
);
