import { useAuth0 } from '@auth0/auth0-react';
import { Container, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginWithGoogleComponent from '../components/LoginWithGoogleComponent';
import LogoComponent from '../components/Logos/AppLogoComponent';
import textMessages from '../shared/TextMessages';
import { useAppDispatch, useAppSelector } from '../store';
import {
  isAuthorized,
  selectUserAuthState,
  setUserAuth,
  UserAuthState,
} from '../store/userAuthSlice';

export default function LoginPage() {
  const { user, isAuthenticated, loginWithRedirect, logout, getIdTokenClaims } =
    useAuth0();

  const navigate = useNavigate();
  function login() {
    loginWithRedirect();
  }

  const dispatch = useAppDispatch();
  const userAuthState = useAppSelector(selectUserAuthState);

  const isAuthorizedState = useAppSelector(isAuthorized);

  useEffect(() => {
    if (isAuthorizedState) {
      (async () => {
        const token = await getIdTokenClaims();
        console.log(token?.__raw);
        dispatch(
          setUserAuth({
            jwt: token?.__raw,
          })
        );
      })();
    } else {
      navigate('/unauthorized');
    }
  }, [isAuthorizedState]);

  useEffect(() => {
    console.log(user);
    const claims = dispatch(
      setUserAuth({
        firstName: user?.given_name,
        lastName: user?.family_name,
        email: user?.email,
        roles:
          user?.['https://hasura.io/jwt/claims']?.['x-hasura-allowed-roles'] ??
          [],
        avatarUrl: user?.picture,
        authSubject: user?.sub,
      } as UserAuthState)
    );
  }, [user]);

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
      <h1>{userAuthState?.firstName}</h1>
      <p>{userAuthState?.jwt ?? 'jwt'}</p>
      <LogoComponent width={'160px'} marginBottom={'5px'} />
      <Typography variant="h5">{textMessages.welcome}</Typography>
      <Divider sx={{ width: '200px', marginBottom: '10px' }} />
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {textMessages.pleaseEnterWithEmailProvidedToParty}
      </Typography>
      <LoginWithGoogleComponent login={login} />
    </Container>
  );
}
