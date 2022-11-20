import { Button } from '@mui/material';
import textMessages from '../shared/TextMessages';
import GoogleLogoComponent from './Logos/GoogleLogoComponent';

interface WithGoogleComponentProps {
  message: string;
  onClick: () => void;
}

export default function WithGoogleComponent(props: WithGoogleComponentProps) {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '200px',
        fontSize: '20px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: 'white',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.16)',
        padding: '10px',
        marginTop: '20px',
      }}
    >
      {props.message}
      <GoogleLogoComponent sx={{ marginLeft: '10px' }} />
    </Button>
  );
}
