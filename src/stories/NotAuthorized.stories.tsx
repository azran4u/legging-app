import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotAuthorizedComponent from '../components/NotAuthorizedComponent';

export default {
  title: 'Login/NotAuthorizedComponent',
  component: NotAuthorizedComponent,
} as ComponentMeta<typeof NotAuthorizedComponent>;

export const Primary: ComponentStory<typeof NotAuthorizedComponent> = () => (
  <NotAuthorizedComponent logout={() => console.log('logout')} />
);
