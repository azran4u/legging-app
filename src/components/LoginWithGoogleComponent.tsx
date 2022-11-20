import textMessages from '../shared/TextMessages';
import WithGoogleComponent from './WithGoogleComponent';

interface LoginWithGoogleComponentProps {
  login: () => void;
}

export default function LoginWithGoogleComponent(
  props: LoginWithGoogleComponentProps
) {
  return (
    <WithGoogleComponent
      message={textMessages.loginWithGoogle}
      onClick={props.login}
    />
  );
}
