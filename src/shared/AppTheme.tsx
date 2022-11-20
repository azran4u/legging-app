import RTL from '../utils/RTL';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

export default function AppTheme({ children }: any) {
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RTL>
  );
}
