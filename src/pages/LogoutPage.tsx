import { Container } from '@mui/material';
import LogoutWithGoogleComponent from '../components/LogoutWithGoogleComponent';
import UserDetailsComponent from '../components/UserDetailsComponent';

export default function LoginPage() {
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
      <UserDetailsComponent />
      <LogoutWithGoogleComponent
        logout={() => {
          console.log('logout');
        }}
      />
    </Container>
  );
}
