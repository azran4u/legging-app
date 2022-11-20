import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginWithGoogleComponent from '../components/LoginWithGoogleComponent';

export default {
  title: 'Login/LoginWithGoogleComponent',
  component: LoginWithGoogleComponent,
} as ComponentMeta<typeof LoginWithGoogleComponent>;

export const Primary: ComponentStory<typeof LoginWithGoogleComponent> = () => (
  <LoginWithGoogleComponent login={() => console.log('login')} />
);
