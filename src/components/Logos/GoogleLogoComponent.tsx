import { Avatar, AvatarProps } from '@mui/material';
import googlei from '../../assets/googlei.svg';
import textMessages from '../../shared/TextMessages';

export default function GoogleLogoComponent(props: AvatarProps) {
  return <Avatar src={googlei} alt={textMessages.googleLogo} {...props} />;
}
