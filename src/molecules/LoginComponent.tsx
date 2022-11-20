import { Container, Divider, Typography } from '@mui/material';
import LogoComponent from '../components/Logos/LogoComponent';
import LoginWithGoogleComponent from '../components/LoginWithGoogleComponent';
import textMessages from '../shared/TextMessages';
import NotAuthorizedComponent from '../components/NotAuthorizedComponent';

export interface LoginProps {
  isAuthorized: boolean;
  loginClicked: () => void;
  logoutClicked: () => void;
}

export default function LoginComponent(props: LoginProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
      }}
    >
      {props.isAuthorized && (
        <>
          <LogoComponent width={'160px'} marginBottom={'5px'} />
          <Typography variant="h5">{textMessages.welcome}</Typography>
          <Divider sx={{ width: '200px', marginBottom: '10px' }} />
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            {textMessages.pleaseEnterWithEmailProvidedToParty}
          </Typography>
          <LoginWithGoogleComponent login={props.loginClicked} />
        </>
      )}

      {!props.isAuthorized && (
        <NotAuthorizedComponent logout={props.logoutClicked} />
      )}
    </Container>
  );
}
