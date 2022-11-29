import Typography from '@mui/material/Typography';
import textMessages from '../shared/TextMessages';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {textMessages.allRightsReserved} {new Date().getFullYear()}
    </Typography>
  );
}
