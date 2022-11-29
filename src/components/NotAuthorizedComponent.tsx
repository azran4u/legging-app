import { Container, Link, Typography } from '@mui/material';
import textMessages from '../shared/TextMessages';
import LogoComponent from './Logos/AppLogoComponent';
import LogoutWithGoogleComponent from './LogoutWithGoogleComponent';

interface UnAuthorizedProps {
  logout: () => void;
}
export default function NotAuthorizedComponent(props: UnAuthorizedProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
      }}
    >
      <LogoComponent width={'160px'} marginBottom={'5px'} />

      <Typography variant="body1" sx={{ color: 'red', textAlign: 'center' }}>
        {textMessages.notAuthorized}
      </Typography>
      <Typography variant="body1" sx={{ color: 'red', textAlign: 'center' }}>
        {textMessages.pleaseEnterWithEmailProvidedToParty}
      </Typography>

      <LogoutWithGoogleComponent logout={props.logout} />
      <Link
        sx={{ marginTop: '10px' }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSdUYvnRmn7YHWwGsHlCKZ2XeAikYzxHAyZLpjV2sFP-ftLxgA/viewform"
      >
        {textMessages.signupHereToTheSystem}
      </Link>
    </Container>
  );
}
