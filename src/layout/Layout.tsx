import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import Copyright from '../components/CopyrightComponent';
import theme from '../shared/theme';

const drawerWidth = 256;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}
        <Navigator
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { sm: 'block', xs: 'none' } }}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1', width: '100%' }}
        >
          <Content />
        </Box>
        <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
}
