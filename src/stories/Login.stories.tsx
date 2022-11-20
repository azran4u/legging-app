import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '../molecules/LoginComponent';

export default {
  title: 'Login/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

export const NotAuthorized: ComponentStory<typeof Login> = () => (
  <Login
    isAuthorized={false}
    loginClicked={() => console.log('login clicked')}
    logoutClicked={() => console.log('logout clicked')}
  />
);

export const Authorized: ComponentStory<typeof Login> = () => (
  <Login
    isAuthorized={true}
    loginClicked={() => console.log('login clicked')}
    logoutClicked={() => console.log('logout clicked')}
  />
);
