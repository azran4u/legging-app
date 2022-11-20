import textMessages from '../shared/TextMessages';
import WithGoogleComponent from './WithGoogleComponent';

interface LoginWithGoogleComponentProps {
  logout: () => void;
}

export default function LogoutWithGoogleComponent(
  props: LoginWithGoogleComponentProps
) {
  return (
    <WithGoogleComponent
      message={textMessages.signOut}
      onClick={props.logout}
    />
  );
}
